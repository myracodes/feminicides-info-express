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
    lng: Number,
    lat: Number,
  },
  relationship: {
    type: String,
    enum: ["compagnon", "ex-compagnon", "compagnon supposé", "non renseigné"],
    // default: "non-renseigné"
  },
  killerAge: Number,
  complaint: Number,
  condemned: {
    type: Boolean,
    default: false
  }, // finalement plutôt string, non ? en cours / oui : jugement prononcé / en attente etc
  nbOtherVictims: {
    type: Number,
    default: 0
  },
  otherVictims: String,
  description: String,
  courtDecision: [String],
  pressArticles: [String],
  commemoration: [String],
  region: {
    type: Schema.Types.ObjectId,
    ref: "Regions",
  },
  completeProfile: {
    type: Boolean,
    default: false
  }
});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;
