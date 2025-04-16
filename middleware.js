module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    if (req.method === "GET") {
      req.session.redirectUrl = req.originalUrl;
    } else {
      // for POST or others, you can choose a default redirect like the listing show page
      const referrer = req.get("Referrer") || "/";
      req.session.redirectUrl = new URL(referrer).pathname;
    }
    req.flash("erruser", "You must be logged in to do that.");
    return res.redirect("/signup?tab=login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
