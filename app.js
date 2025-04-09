const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override')
const Listing = require("./models/listings.js");
const ejsmate = require('ejs-mate') ;
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

mongoose
  .connect("mongodb://127.0.0.1:27017/tripmate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  res.send("This is Root");
});

//Listing Route
app.get("/listings", (req, res) => {
  Listing.find()
    .then((result) => {
      res.render("listings/index", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

//Show Route
app.get("/listings/:id", (req, res) => {
  let { id } = req.params;
  Listing.findById(id)
    .then((result) => {
      res.render("listings/show", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Add New Route
app.post("/listings", async (req, res) => {
  await Listing.create(req.body)
    .then((result) => {
      res.redirect("/listings");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Edit Route
app.get("/listings/:id/edit", (req, res) => {
  let { id } = req.params;
  Listing.findById(id)
    .then((result) => {
      res.render("listings/edit", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Route
app.put("/listings/:id", (req, res) => {
  let { id } = req.params;
  Listing.findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.redirect(`/listings/${id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});    

//Delete Route
app.delete("/listings/:id", (req, res) => {
  let { id } = req.params;
  Listing.findByIdAndDelete(id)
    .then((result) => {
      res.redirect("/listings");
    })
    .catch((err) => {
      console.log(err);
    });
}); 