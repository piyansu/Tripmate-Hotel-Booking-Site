const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const Listing = new Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

Listing.post("findOneAndDelete" , async(listing) => {
  if(listing)
  await Review.deleteMany({_id : {$in: listing.reviews}});
})

module.exports = mongoose.model("Listing", Listing);

