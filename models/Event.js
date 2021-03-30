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
    enum: ["condamné", "non condamné", "en cours", "non renseigné"],
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
  commemoration: [String],
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
