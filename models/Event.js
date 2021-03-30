const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  city: String,
  firstName: {
    type: String,
    default: "Une femme",
  },
  lastName: String,
  age: {
    type: Number,
    required: true,
  },
  coordinates: {
    lng: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
  relationship: {
    type: String,
    enum: ["compagnon", "ex-compagnon", "compagnon supposé", "non renseigné"],
    default: "non-renseigné",
  },
  killerAge: Number,
  complaint: Number,
  condemned: {
    type: String,
    enum: ["condamné", "non condamné", "en cours", "suicide après acte", "non renseigné"],
    default: "non renseigné",
  },
  nbOtherVictims: {
    type: Number,
    default: 0,
  },
  otherVictims: {
    type: String,
    default: "non renseigné",
  },
  description: String,
  courtDecision: [String],
  pressArticles: [String],
  commemoration: {
    type: String,
    default: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/153803050_238212984635355_1749325389102366591_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=6e_9wCcYq88AX-hdOOp&_nc_ht=scontent-cdt1-1.xx&oh=398bf02a6d314d6a630f34e4cfe5e8f0&oe=6088FB8B",
  },
  imageSource: String,
  region: {
    type: Schema.Types.ObjectId,
    ref: "Regions",
  },
  completeProfile: {
    type: Boolean,
    default: false,
  },
});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;
