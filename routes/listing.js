const express = require("express");
const router = express.Router();
const Listing = require("../models/listings.js");
const { isLoggedIn } = require("../middleware.js");

// GET /listings - Show listings from other users only
router.get("/", isLoggedIn, async (req, res, next) => {
    const listings = await Listing.find({ owner: { $ne: req.user._id } }).sort({ title: 1 });
    res.render("listings/index", { data: listings });
});

// GET /listings - Show only the logged-in user's own listings
router.get("/user-listings", isLoggedIn, async (req, res, next) => {
    const listings = await Listing.find({ owner: req.user._id }).sort({ title: 1 });
    res.render("listings/user-listing", { data : listings });
});




// GET /listings/new
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new");
});

// GET /listings/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Update this line to populate the author field inside reviews
  const result = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author"
      }
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
});

// POST /listings
router.post("/", isLoggedIn , async (req, res, next) => {
  try {
    const newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("newlisting", "New Listing Created");
    res.redirect(`/listings/${newListing.id}`);
  } catch (err) {
    next(err);
  }
});

// GET /listings/:id/edit
router.get("/:id/edit", isLoggedIn, async (req, res) => {
  const result = await Listing.findById(req.params.id);
  if (!result) return res.status(404).render("listings/error");

  // Check if the current user is the owner of the listing
  if (!req.user.equals(result.owner)) {
    req.flash("error", "You are not authorized to edit this listing.");
    return res.redirect("/listings");
  }

  res.render("listings/edit", { data: result });
});

// PUT /listings/:id
router.put("/:id", async (req, res, next) => {
  const result = await Listing.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/listings/${req.params.id}`);
});

// DELETE /listings/:id
router.delete("/:id", isLoggedIn, async (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/signup?tab=login");
  const result = await Listing.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).render("listings/error");
  res.redirect("/listings");
});

module.exports = router;