require("dotenv").config();
require("../../config/dbConnection");
const { Mongoose } = require("mongoose");
const User = require("../../models/User");

const users = [
  {
    email: "melu@email.com",
    password: "123456789",
    firstName: "Mélu",
    lastName: "Rey",
    role: "admin"
  },
  {
    email: "anna@email.com",
    password: "123456789",
    firstName: "Anna",
    lastName: "Lefour",
    role: "admin"
  },
  {
    email: "anais@email.com",
    password: "123456789",
    firstName: "Anaïs",
    lastName: "Lefour",
    role: "admin"
  },
  {
    email: "myriam@email.com",
    password: "123456789",
    firstName: "Myriam",
    lastName: "Mira",
    role: "admin"
  }
];

User.create(users)
.then(createdUsers => console.log("Users created! ", createdUsers))
.catch(error => console.log(error));

mongoose.connection.close()