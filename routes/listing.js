const express = require("express");
const router = express.Router();
const Listing = require("../models/listings.js");
const {isLoggedIn} = require("../middleware.js");

// GET /listings
router.get("/", async (req, res, next) => {
  const result = await Listing.find().sort({ title: 1 });
  res.render("listings/index", { data: result });
});

// GET /listings/new
router.get("/new", isLoggedIn ,(req, res) => {
  res.render("listings/new");
});

// GET /listings/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await Listing.findById(id).populate("reviews").populate("owner");

  // If listing not found, show error
  if (!result) {
    return res.status(404).render("listings/error");
  }

  res.render("listings/show", { data: result });
});

// POST /listings
router.post("/", async (req, res, next) => {
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
router.get("/:id/edit",isLoggedIn, async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/signup?tab=login");
  }

  const result = await Listing.findById(req.params.id);
  if (!result) return res.status(404).render("listings/error");

  res.render("listings/edit", { data: result });
});

// PUT /listings/:id
router.put("/:id", async (req, res, next) => {
  const result = await Listing.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/listings/${req.params.id}`);
});

// DELETE /listings/:id
router.delete("/:id", isLoggedIn,async (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/signup?tab=login");
  const result = await Listing.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).render("listings/error");
  res.redirect("/listings");
});

module.exports = router;
