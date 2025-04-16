const express = require("express");
const router = express.Router();
const Listing = require("../models/listings.js");
const Review = require("../models/reviews.js");
const { isLoggedIn } = require("../middleware.js");
const reviewcontroller = require("../controllers/reviews.js");

//Add Review Route
router.post("/:id/reviews", isLoggedIn, reviewcontroller.addreview);

//Delete Review
router.delete("/:id/reviews/:reviewId", isLoggedIn, reviewcontroller.deletereview);

module.exports = router;