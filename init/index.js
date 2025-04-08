const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listings.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/tripmate")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

const initdb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initdata.data);
  console.log("Database Inserted successfully");
  mongoose.connection.close();
};

initdb();