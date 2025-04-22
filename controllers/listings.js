const Listing = require("../models/listings.js");
const axios = require("axios");
require("dotenv").config();

module.exports.listings = async (req, res, next) => {
  try {
    let listings;
    const { location } = req.query;

    if (location) {
      const searchRegex = new RegExp(location, "i");
      listings = await Listing.find({ location: searchRegex });
    } else if (req.isAuthenticated()) {
      listings = await Listing.find({ owner: { $ne: req.user._id } }).sort({ title: 1 });
    } else {
      listings = await Listing.find({}).sort({ title: 1 });
    }

    // Optional: Ensure images field exists as an array on each listing
    listings = listings.map(listing => ({
      ...listing.toObject(),
      images: Array.isArray(listing.images) ? listing.images : [],
    }));

    res.render("listings/index", { data: listings });

  } catch (err) {
    next(err);
  }
};


module.exports.userlistings = async (req, res, next) => {
  const listings = await Listing.find({ owner: req.user._id }).sort({
    title: 1,
  });
  res.render("listings/user-listing", { data: listings });
};

module.exports.rendernewform = (req, res) => {
  res.render("listings/new");
};

module.exports.showlistings = async (req, res) => {
  const { id } = req.params;

  const result = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  // If listing not found, show error
  if (!result) {
    return res.status(404).render("listings/error");
  }


  res.render("listings/show", {
    listing: result,
    currentUser: req.user,
    listingCoordinates: result.geometry?.coordinates || [88.3406, 22.7505],
    listingTitle: result.title,
    listingLocation: result.location,
  });
};

module.exports.postlistings = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Files received:", req.files ? req.files.length : 0);
    
    if (!req.files || req.files.length !== 3) {
      console.log("File issue detected:", req.files);
      req.flash("error", "Please upload exactly 3 images");
      return res.redirect("/listings/new");
    }
    
    const { location } = req.body;
    
    // 1. Geocode location with error handling
    let geoData;
    try {
      const encodedLocation = encodeURIComponent(location);
      console.log(`Geocoding location: ${location}`);
      
      const geoRes = await axios.get(
        `https://api.maptiler.com/geocoding/${encodedLocation}.json`,
        {
          params: {
            key: process.env.MAPTILER_API_KEY,
          },
        }
      );

      if (geoRes.data.features && geoRes.data.features.length > 0) {
        geoData = geoRes.data.features[0].geometry;
        console.log("Geocoded coordinates:", geoData.coordinates);
      } else {
        console.log("No geocoding results found");
        req.flash("error", "Could not find coordinates for this location. Please try a different location.");
        return res.redirect("/listings/new");
      }
    } catch (err) {
      console.error("Geocoding error:", err.message);
      req.flash("error", "Error geocoding location. Please try again.");
      return res.redirect("/listings/new");
    }

    // 2. Save listing with geolocation and multiple images
    const newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    
    // Process multiple image files
    console.log("Processing files:", req.files);
    newListing.images = req.files.map(file => {
      console.log("Processing file:", file.filename);
      return {
        url: file.path,
        filename: file.filename
      };
    });
    
    newListing.geometry = geoData; // Save the geo coordinates
    
    const savedListing = await newListing.save();
    console.log(`Saved listing ${savedListing._id} with coordinates: ${JSON.stringify(geoData.coordinates)}`);
    console.log(`Saved ${newListing.images.length} images`);

    req.flash("newlisting", "New Listing Created");
    res.redirect(`/listings/${newListing.id}`);
  } catch (err) {
    console.error("Error saving listing:", err);
    req.flash("error", `Error creating listing: ${err.message}`);
    res.redirect("/listings/new");
  }
};

module.exports.rendereditform = async (req, res) => {
  const result = await Listing.findById(req.params.id);
  if (!result) return res.status(404).render("listings/error");

  // Check if the current user is the owner of the listing
  if (!req.user.equals(result.owner)) {
    req.flash("error", "You are not authorized to edit this listing.");
    return res.redirect("/listings");
  }

  res.render("listings/edit", { data: result });
};

module.exports.editlistings = async (req, res, next) => {
  try {
    // Find the listing
    const listing = await Listing.findById(req.params.id);
    
    // Update basic listing details
    if (req.body.title) listing.title = req.body.title;
    if (req.body.description) listing.description = req.body.description;
    if (req.body.price) listing.price = req.body.price;
    if (req.body.location) listing.location = req.body.location;
    if (req.body.country) listing.country = req.body.country;
    
    // Handle image deletions
    if (req.body.deleteImages && req.body.deleteImages.length) {
      // Filter out empty values
      const filesToDelete = req.body.deleteImages.filter(filename => filename.trim() !== '');
      
      // Remove images from array
      if (filesToDelete.length > 0) {
        // Remove from storage (e.g., Cloudinary) - add your delete logic here
        // For example:
        // for (let filename of filesToDelete) {
        //   await cloudinary.uploader.destroy(filename);
        // }
        
        // Filter out the deleted images from the images array
        listing.images = listing.images.filter(img => !filesToDelete.includes(img.filename));
      }
    }
    
    // Add new uploaded images
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => ({
        url: file.path,
        filename: file.filename
      }));
      
      // Add new images to the existing ones
      listing.images.push(...newImages);
      
      // Ensure we don't exceed 3 images total
      if (listing.images.length > 3) {
        listing.images = listing.images.slice(0, 3);
      }
    }
    
    // Save the updated listing
    await listing.save();
    
    res.redirect(`/listings/${req.params.id}`);
  } catch (err) {
    next(err);
  }
};

module.exports.deletelistings = async (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/signup?tab=login");
  const result = await Listing.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).render("listings/error");
  res.redirect("/listings/user-listings");
};

module.exports.renderbookingform = async (req, res) => {
  const listing = await Listing.findById(req.params.id).populate("reviews");
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/booking", { listing });
};
