const User = require("../models/User");

module.exports = function adminRights(req, res, next) {
  User.findById(req.session.currentUser)
    .then((user) => {
      console.log(user);
      if (user.role === "admin") {
        next();
      } else {
        return res
          .status(401)
          .json({ message: "Unauthorized, you're not an admin" });
      }
    })
    .catch((err) => console.log(err));
};
