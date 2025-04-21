const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listings.js");

mongoose
  .connect("mongodb+srv://piyansu:qbPfwbNQ0TdUJZM4@cluster0.uqo9cw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

const initdb = async () => {
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner : "6801126fc3625bbece6291e2",
  }));
  await Listing.insertMany(initdata.data);
  console.log("Database Inserted successfully");
  mongoose.connection.close();
};

initdb();
