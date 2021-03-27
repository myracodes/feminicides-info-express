const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventNumber: Number,
  date: {
    type: Date,
    required: true
  },
  city: String,
  firstName: {
    type: String,
    default: "Une femme"
  },
  lastName: String,
  age: {
    type: Number,
    required: true
  },
  coordinates: [Number],
  relationship: {
    type: String,
    enum: ["compagnon", "ex-compagnon", "non renseigné"],
    // default: "non-renseigné"
  },
  killerAge: Number,
  complaint: Number,
  condemned: Boolean, // finalement plutôt string, non ? en cours / oui : jugement prononcé / en attente etc
  nbOtherVictims: Number,
  otherVictims: String,
  description: String,
  courtDecision: [String],
  pressArticles: [String],
  commemoration: [String],
  region: {
    type: Schema.Types.ObjectId,
    ref: "Regions"
  },
  completeProfile : Boolean
});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;