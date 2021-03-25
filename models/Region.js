const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  politicalParty: String,
  regionVSSBudget: Number,
  events: [{
    type: Schema.Types.ObjectId,
    ref: "Events"
  }],
  trainedStaff: Number,
  VSSTrainingBudget: Number,
  shelterPlaces: Number
});

const Region = mongoose.model("Regions", regionSchema);

module.exports = Region;