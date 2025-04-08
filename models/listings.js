const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Listing = new Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", Listing);
