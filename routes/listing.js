const express = require("express");
const router = express.Router();
const Listing = require("../models/listings.js");
const { isLoggedIn } = require("../middleware.js");
//Setup Multer
const multer = require("multer");
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

const listingcontroller = require("../controllers/listings.js");

// GET /listings - Show listings from other users only
router
  .route("/")
  .get(listingcontroller.listings)
  .post(isLoggedIn, upload.array("image", 3), listingcontroller.postlistings)

// GET /listings - Show only the logged-in user's own listings
router.get("/user-listings", isLoggedIn, listingcontroller.userlistings);

// GET /listings/new
router.get("/new", isLoggedIn, listingcontroller.rendernewform);

// GET /listings/:id
router
    .route("/:id")
    .get(listingcontroller.showlistings)
    .put(upload.array("images", 3), listingcontroller.editlistings)
    .delete(isLoggedIn, listingcontroller.deletelistings);

// GET /listings/:id/edit
router.get("/:id/edit", isLoggedIn, listingcontroller.rendereditform);

router.get("/:id/booking", isLoggedIn, listingcontroller.renderbookingform);

module.exports = router;
