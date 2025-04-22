const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listings.js");

const initdb = async () => {
  try {
    // Connect to MongoDB first
    await mongoose.connect(
      "mongodb+srv://piyansu:qbPfwbNQ0TdUJZM4@cluster0.uqo9cw5.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
    );
    
    console.log("Connected to mongoDB");
    
    // Prepare the data with owner field
    initdata.data = initdata.data.map((obj) => ({
      ...obj,
      owner: "6801126fc3625bbece6291e2",
    }));
    
    // Clear existing data (optional)
    await Listing.deleteMany({});
    
    // Insert new data
    await Listing.insertMany(initdata.data);
    console.log("Database Inserted successfully");
  } catch (err) {
    console.error("ERROR:", err);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

// Call the function
//initdb();

mongoose.connect(
  "mongodb+srv://piyansu:qbPfwbNQ0TdUJZM4@cluster0.uqo9cw5.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
  {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  }
);


const updateListingImages = async () => {
  try {
    const listing = await Listing.findById("680757104f1ea22bd349ddbd");
    if (!listing) {
      console.error("Listing not found");
      return;
    }
    listing.images = [
      {
        url: "https://images.unsplash.com/photo-1572431447238-425af66a273b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&dpr=2",
        filename: "listingimage1"
      },
      {
        url: "https://images.unsplash.com/photo-1581002662862-e4e10664b947?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjg2OXwwfDF8c2VhcmNofDJ8fGJlYWNoJTIwcmVzb3J0fGVufDB8fHx8fDE2ODk2NzM2Mzg&ixlib=rb-1.2.1&q=80&w=400",
        filename: "listingimage2"
      },
      {
        url: "https://images.unsplash.com/photo-1606165264999-d19c1b625cdb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjg2OXwwfDF8c2VhcmNofDJ8fGJlYWNoJTIwcmVzb3J0fGVufDB8fHx8fDE2ODk2NzM2Mzg&ixlib=rb-1.2.1&q=80&w=400",
        filename: "listingimage3"
      }
    ];
    await listing.save();
    console.log("Listing images updated successfully");
  } catch (err) {
    console.error("ERROR:", err);
  }
};

updateListingImages();
