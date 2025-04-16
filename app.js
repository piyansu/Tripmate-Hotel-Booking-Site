if(process.env.NODE_ENV != "production")
  require('dotenv').config()
// Setup Express
const express = require("express");
const app = express();

// Setup Mongoose
const mongoose = require("mongoose");

// Setup Path
const path = require("path");

// Setup Method Override
const methodOverride = require("method-override");

// Setup Models
const User = require("./models/user.js");

// Setup EjsMate
const ejsmate = require("ejs-mate");

// Setup Express Session
const session = require("express-session");

// Setup Connect Flash
const flash = require("connect-flash");

// Setup Passport
const passport = require("passport");
const localstrategy = require("passport-local");

// Setup Routes
const listings = require("./routes/listing.js");
const review = require("./routes/review.js");
const user = require("./routes/user.js");

// Setup App
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

// Setup Session
app.use(
  session({
    secret: "Piyansu@2002",
    resave: true,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

// Setup Flash
app.use(flash());

// Setup Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Setup Middleware
app.use((req, res, next) => {
  // Make current user available to all templates
  res.locals.currentUser = req.user;
  res.locals.newlisting = req.flash("newlisting");
  res.locals.newuser = req.flash("newuser");
  res.locals.erruser = req.flash("erruser");
  res.locals.error = req.flash("error");
  res.locals.previousUsername = req.session.previousUsername || "";
  next();
});

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/tripmate")
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

// Root Route
app.get("/", (req, res) => {
  res.render("listings/home");
});

// Setup Routes
app.use("/listings", listings);
app.use("/listings", review);
app.use("/", user);

// Error Handler
app.use((req, res) => {
  res.render("listings/error");
});

// Start Server
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
