const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  role: { type: String, enum: ["admin", "éditrice"], default: "éditrice" }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
