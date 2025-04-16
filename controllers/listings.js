const Listing = require("../models/listings.js");

module.exports.listings = async (req, res, next) => {
  const listings = await Listing.find({ owner: { $ne: req.user._id } }).sort({
    title: 1,
  });
  res.render("listings/index", { data: listings });
};

module.exports.userlistings = async (req, res, next) => {
  const listings = await Listing.find({ owner: req.user._id }).sort({
    title: 1,
  });
  res.render("listings/user-listing", { data: listings });
};

module.exports.rendernewform = (req, res) => {
  res.render("listings/new");
};

module.exports.showlistings = async (req, res) => {
  const { id } = req.params;

  // Update this line to populate the author field inside reviews
  const result = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  // If listing not found, show error
  if (!result) {
    return res.status(404).render("listings/error");
  }
  res.render("listings/show", {
    listing: result,
    currentUser: req.user, // Pass the current user to the template
  });
};

module.exports.postlistings = async (req, res) => {
  const newListing = new Listing(req.body);
  newListing.owner = req.user._id;
  newListing.image = req.file.path;xx
  await newListing.save();
  req.flash("newlisting", "New Listing Created");
  res.redirect(`/listings/${newListing.id}`);
};

module.exports.rendereditform = async (req, res) => {
  const result = await Listing.findById(req.params.id);
  if (!result) return res.status(404).render("listings/error");

  // Check if the current user is the owner of the listing
  if (!req.user.equals(result.owner)) {
    req.flash("error", "You are not authorized to edit this listing.");
    return res.redirect("/listings");
  }

  res.render("listings/edit", { data: result });
};

module.exports.editlistings = async (req, res, next) => {
  const result = await Listing.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/listings/${req.params.id}`);
};

module.exports.deletelistings = async (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/signup?tab=login");
  const result = await Listing.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).render("listings/error");
  res.redirect("/listings");
};
