
const User = require("../models/User");

module.exports = function adminRights(req, res, next) {
console.log("ùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùù")
console.log(req.session.currentUser);
User.findById(req.session.currentUser).then((user) => {
  console.log(user);
  if (user.role !== "admin") {
    return res
      .status(401)
      .json({ message: "Unauthorized, you're not an admin" });
  }
})
next();
  
};