const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getISTDateTime() {
  return new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
  });
}

const Review = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: String ,
    default: getISTDateTime,
  },
});

module.exports = mongoose.model("Review", Review);
