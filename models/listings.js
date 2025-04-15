const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");
const User = require("./user.js");

function getISTDateTime() {
  return new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
  });
}

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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
  createdAt: {
    type: String ,
    default: getISTDateTime,
  },

});

Listing.post("findOneAndDelete" , async(listing) => {
  if(listing)
  await Review.deleteMany({_id : {$in: listing.reviews}});
})

module.exports = mongoose.model("Listing", Listing);

