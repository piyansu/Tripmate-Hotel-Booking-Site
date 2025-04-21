const Listing = require("../models/listings.js");
const axios = require("axios");
require("dotenv").config();

module.exports.listings = async (req, res, next) => {
  let listings;
  const { location } = req.query;

  if (location) {
    // If a location is specified in the query, filter by location (case-insensitive)
    const searchRegex = new RegExp(location, "i");
    listings = await Listing.find({ location: searchRegex });
  } else if (req.isAuthenticated()) {
    // Show listings not owned by the user
    listings = await Listing.find({ owner: { $ne: req.user._id } }).sort({
      title: 1,
    });
  } else {
    // Show all listings
    listings = await Listing.find({}).sort({ title: 1 });
  }

  res.render("listings/index", { data: listings });
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

  console.log("Listing geometry:", result.geometry); // Add this line to log the geometry

  res.render("listings/show", {
    listing: result,
    currentUser: req.user,
    listingCoordinates: result.geometry?.coordinates || [88.3406, 22.7505],
    listingTitle: result.title,
    listingLocation: result.location,
  });
};

module.exports.postlistings = async (req, res) => {
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

  // 2. Save listing with geolocation
  try {
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    newListing.image.url = url;
    newListing.image.filename = filename;
    newListing.geometry = geoData; // Save the geo coordinates
    
    await newListing.save();
    console.log(`Saved listing with coordinates: ${JSON.stringify(geoData.coordinates)}`);

    req.flash("newlisting", "New Listing Created");
    res.redirect(`/listings/${newListing.id}`);
  } catch (err) {
    console.error("Error saving listing:", err);
    req.flash("error", "Error creating listing");
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
  const result = await Listing.findByIdAndUpdate(req.params.id, req.body);
  if (req.file) {
    result.image.url = req.file.path;
    result.image.filename = req.file.filename;
    await result.save();
  }

  res.redirect(`/listings/${req.params.id}`);
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
