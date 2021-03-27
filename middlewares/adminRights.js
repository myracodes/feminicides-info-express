module.exports = function adminRights(req, res, next) {
  if (req.session.currentUser.role !== "admin") {
    return res
      .status(401)
      .json({ message: "Vous n'avez pas les droits requis pour cette action" });
  } else {
    next();
  }
};
