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

  // Update this line to populate the author field inside reviews
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
    currentUser: req.user, // Pass the current user to the template
  });
};

module.exports.postlistings = async (req, res) => {
  const { location } = req.body;

  // 1. Geocode location
  let geoData;
  const geoRes = await axios.get(
    `https://api.maptiler.com/geocoding/${location}.json`,
    {
      params: {
        key: process.env.MAPTILER_API_KEY, // Store your key in .env
      },
    }
  );

  if (geoRes.data.features && geoRes.data.features.length > 0) {
    geoData = geoRes.data.features[0].geometry; // { type: 'Point', coordinates: [lng, lat] }
  } else {
    req.flash("error", "Invalid location, please try again.");
    return res.redirect("/listings/new");
  }

  // 2. Save listing with geolocation
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body);
  newListing.owner = req.user._id;
  newListing.image.url = url;
  newListing.image.filename = filename;
  newListing.geometry = geoData; // 👈 Save geo coordinates here
  await newListing.save();

  req.flash("newlisting", "New Listing Created");
  res.redirect(`/listings/${newListing.id}`);
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
