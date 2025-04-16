const User = require("../models/user.js");

module.exports.rendersignup = (req, res) => {
  res.render("listings/sigup");
};

module.exports.createuser = async (req, res) => {
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
};

module.exports.renderlogin = (req, res) => {
  res.redirect("/signup?tab=login");
};

module.exports.userlogin = (req, res) => {
  res.redirect("/signup?tab=login");
};

module.exports.userlogout = (req, res) => {
    req.logout((err) => {
      console.log(err);
    });
    // Redirect to homepage
    res.redirect("/");
  }