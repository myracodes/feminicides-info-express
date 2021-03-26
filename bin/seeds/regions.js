require("dotenv").config();
require("../../config/dbConnection");
const mongoose = require("mongoose");


const Region = require("../../models/Region");

const regionList = [
  {
    name: "Auvergne-Rhône-Alpes",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Bourgogne-Franche-Comté",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Bretagne",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Centre-Val de Loire",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Corse",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Grand Est",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Guadeloupe",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Guyane",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Hauts-de-France",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Île-de-France",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Martinique",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Normandie",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Nouvelle-Aquitaine",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Occitanie",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Pays de la Loire",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
  {
    name: "Réunion",
    politicalParty: "String",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0,
  },
];

Region.create(regionList)
  .then((list) => {
    console.log(list);
  })
  .catch((error) => {
    console.log(error);
  });

  mongoose.connection.close()
