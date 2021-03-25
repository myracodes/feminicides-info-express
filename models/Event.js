const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventNumber: Number,
  date: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  age: {
    type: Number,
    required: true
  },
  relationship: {
    type: String,
    enum: ["compagnon", "ex-compagnon"]
  },
  killerAge: Number,
  complaint: Number,
  condemned: Boolean,
  nbOtherVictims: Number,
  otherVictims: String,
  description: String,
  courtDecision: [String],
  pressArticles: [String],
  commemoration: [String],
  region: {
    type: Schema.Types.ObjectId,
    ref: "Regions"
  }
});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;