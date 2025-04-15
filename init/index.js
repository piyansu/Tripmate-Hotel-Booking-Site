const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listings.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/tripmate")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

const initdb = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner : "67fe469ded437a6f9fa96ff9",
  }));
  await Listing.insertMany(initdata.data);
  console.log("Database Inserted successfully");
  mongoose.connection.close();
};

initdb();
