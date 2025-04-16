// Define router
const express = require("express");
const router = express.Router();

// Import User model and passport
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usercontrollers = require("../controllers/users.js");

// GET /signup
// Render signup page
router.route("/signup")
.get(usercontrollers.rendersignup)
.post(saveRedirectUrl, usercontrollers.createuser);


// GET /login
// Redirect to signup page with login tab
router.get("/login", usercontrollers.renderlogin);

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
router.get("/logout", usercontrollers.userlogout);

// Export router
module.exports = router;
