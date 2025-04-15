const express = require("express");
const router = express.Router();
const Listing = require("../models/listings.js");
const Review = require("../models/reviews.js");

//Add Review Route
router.post("/:id/reviews", async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  // Parse rating to number and override if it's an array
  const reviewData = {
    ...req.body,
    rating: Array.isArray(req.body.rating)
      ? Number(req.body.rating[0])
      : Number(req.body.rating),
  };

  const review = new Review(reviewData);

  listing.reviews.push(review);
  await review.save();
  await listing.save();

  res.redirect(`/listings/${req.params.id}`);
});

//Delete Review
router.delete("/:id/reviews/:reviewId", async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
});

module.exports = router;
