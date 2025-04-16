const Listing = require("../models/listings.js");
const Review = require("../models/reviews.js");

module.exports.addreview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  const newreview = new Review(req.body.review);
  newreview.author = req.user._id;
  // Set the creation date explicitly
  newreview.createdAt = new Date();

  listing.reviews.push(newreview);
  await newreview.save();
  await listing.save();
  req.flash("success", "New Review Created!!");
  res.redirect(`/listings/${req.params.id}`);
};

module.exports.deletereview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted successfully");
  res.redirect(`/listings/${id}`);
};
