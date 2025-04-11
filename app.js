const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listings.js");
const Review = require("./models/reviews.js");
const ejsmate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

mongoose
  .connect("mongodb://127.0.0.1:27017/tripmate")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  try {
    const result = await Listing.find().sort({ title: 1 }); // 1 = ascending, -1 = descending
    res.render("listings/index", { data: result });
  } catch (err) {
    console.log(err);
  }
});

// Listing Route (Sorted by title)
app.get("/listings", async (req, res) => {
  try {
    const result = await Listing.find().sort({ title: 1 }); // 1 = ascending, -1 = descending
    res.render("listings/index", { data: result });
  } catch (err) {
    console.log(err);
  }
});

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  try {
    const result = await Listing.findById(req.params.id).populate("reviews");
    res.render("listings/show", { data: result });
  } catch (err) {
    console.log(err);
  }
});

//Add New Route
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.redirect(`/listings/${newListing.id}`);
  } catch (err) {
    console.log(err);
  }
});

//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  try {
    const result = await Listing.findById(req.params.id);
    res.render("listings/edit", { data: result });
  } catch (err) {
    console.log(err);
  }
});

//Update Route
app.put("/listings/:id", async (req, res) => {
  try {
    const result = await Listing.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/listings/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
  }
});

app.post("/listings/:id/reviews", async (req, res) => {
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
app.delete("/listings/:id/reviews/:reviewId", async (req, res) => {
  let {id , reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
});

// Error Handler
app.use((req, res) => {
  res.render("listings/error");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
