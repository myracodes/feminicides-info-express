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
    default: "non renseigné",
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
    default: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/134188995_201395188317135_7367171530112152291_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1dUd6ZdF9bIAX9n59OY&_nc_ht=scontent-cdt1-1.xx&oh=2504fa9e947ca7a174da7a84bb325d93&oe=60899739",
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
