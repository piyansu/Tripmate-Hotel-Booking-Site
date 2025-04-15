// Define router
const express = require("express");
const router = express.Router();

// Import User model and passport
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// GET /signup
// Render signup page
router.get("/signup", (req, res) => {
  res.render("listings/sigup");
});

// POST /signup
// Create new user
router.post("/signup",saveRedirectUrl, async (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username });

  try {
    const resultuser = await User.register(user, password);

    // Now log the user in
    req.login(resultuser, (err) => {
      if (err) {
        console.log("Login error after signup:", err);
        req.flash("erruser", "Something went wrong during login.");
        return res.redirect("/login");
      }

      req.flash("newuser", "Successfully signed up!");
      // Redirect after successful login
      res.redirect(res.locals.redirectUrl || "/listings");
    });
  } catch (err) {
    if (err.code === 11000 && err.keyValue.email) {
      req.flash("erruser", "Email already exists. Please use a different one.");
    } else {
      req.flash("erruser", err.message);
    }
    res.redirect("/signup");
  }
});

// GET /login
// Redirect to signup page with login tab
router.get("/login", (req, res) => {
  res.redirect("/signup?tab=login");
});

// POST /login
// Authenticate user
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    // Redirect to signup page with login tab on failure
    failureRedirect: "/signup?tab=login",
    // Flash error message on failure
    failureFlash: true,
  }),
  async (req, res) => {
    // Redirect to listings page on success
    res.redirect(res.locals.redirectUrl || "/listings");
  }
);

// GET /logout
// Log user out
router.get("/logout", (req, res) => {
  req.logout((err) => {
    console.log(err);
  });
  // Redirect to homepage
  res.redirect("/");
});

// Export router
module.exports = router;
