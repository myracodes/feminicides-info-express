require("dotenv").config();
require("../../config/dbConnection");
const mongoose = require("mongoose");


const Region = require("../../models/Region");

const regionList = [
  {
    name: "Auvergne-Rhône-Alpes",
    politicalParty: "Les Républicains",
    regionVSSBudget: 3.8,
    events: [],
    trainedStaff: 200,
    VSSTrainingBudget: 0,
    shelterPlaces: 50,
  },
  {
    name: "Bourgogne-Franche-Comté",
    politicalParty: "Parti socialiste",
    regionVSSBudget: 1.9,
    events: [],
    trainedStaff: 180,
    VSSTrainingBudget: 0,
    shelterPlaces: 70,
  },
  {
    name: "Bretagne",
    politicalParty: "Parti socialiste",
    regionVSSBudget: 1.6,
    events: [],
    trainedStaff: 300,
    VSSTrainingBudget: 0,
    shelterPlaces: 180,
  },
  {
    name: "Centre-Val de Loire",
    politicalParty: "Parti socialiste",
    regionVSSBudget: 1.7,
    events: [],
    trainedStaff: 150,
    VSSTrainingBudget: 0,
    shelterPlaces: 200,
  },
  {
    name: "Corse",
    politicalParty: "Corsica libera",
    regionVSSBudget: 1.3,
    events: [],
    trainedStaff: 70,
    VSSTrainingBudget: 0,
    shelterPlaces: 30,
  },
  {
    name: "Grand Est",
    politicalParty: "Les Républicains",
    regionVSSBudget: 3.4,
    events: [],
    trainedStaff: 500,
    VSSTrainingBudget: 0,
    shelterPlaces: 250,
  },
  {
    name: "Guadeloupe",
    politicalParty: "Changez d'Avenir",
    regionVSSBudget: 0.822,
    events: [],
    trainedStaff: 100,
    VSSTrainingBudget: 0,
    shelterPlaces: 30,
  },
  {
    name: "Guyane",
    politicalParty: "Divers droite",
    regionVSSBudget: 0.540,
    events: [],
    trainedStaff: 80,
    VSSTrainingBudget: 0,
    shelterPlaces: 30,
  },
  {
    name: "Hauts-de-France",
    politicalParty: "Les Républicains",
    regionVSSBudget: 3.7,
    events: [],
    trainedStaff: 500,
    VSSTrainingBudget: 0,
    shelterPlaces: 300,
  },
  {
    name: "Ile-de-France",
    politicalParty: "Les Républicains",
    regionVSSBudget: 5,
    events: [],
    trainedStaff: 800,
    VSSTrainingBudget: 0,
    shelterPlaces: 200,
  },
  {
    name: "Martinique",
    politicalParty: "Divers droite",
    regionVSSBudget: 1.3,
    events: [],
    trainedStaff: 170,
    VSSTrainingBudget: 0,
    shelterPlaces: 60,
  },
  {
    name: "Normandie",
    politicalParty: "les Républicains",
    regionVSSBudget: 2.6,
    events: [],
    trainedStaff: 200,
    VSSTrainingBudget: 0,
    shelterPlaces: 150,
  },
  {
    name: "Nouvelle-Aquitaine",
    politicalParty: "Parti socialiste",
    regionVSSBudget: 3.1,
    events: [],
    trainedStaff: 400,
    VSSTrainingBudget: 0,
    shelterPlaces: 180,
  },
  {
    name: "Occitanie",
    politicalParty: "Divers gauche",
    regionVSSBudget: 3.5,
    events: [],
    trainedStaff: 250,
    VSSTrainingBudget: 0,
    shelterPlaces: 100,
  },
  {
    name: "Pays de la Loire",
    politicalParty: "Les Républicains",
    regionVSSBudget: 2,
    events: [],
    trainedStaff: 300,
    VSSTrainingBudget: 0,
    shelterPlaces: 100,
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    politicalParty: "Les Républicains",
    regionVSSBudget: 2.3,
    events: [],
    trainedStaff: 400,
    VSSTrainingBudget: 0,
    shelterPlaces: 200,
  },
  {
    name: "Réunion",
    politicalParty: "Les Républicains",
    regionVSSBudget: 0.888,
    events: [],
    trainedStaff: 200,
    VSSTrainingBudget: 0,
    shelterPlaces: 50,
  },
  {
    name: "Mayotte",
    politicalParty: "Divers droite",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 100,
    VSSTrainingBudget: 0,
    shelterPlaces: 20,
  },
  {
    name: "Nouvelle-Calédonie",
    politicalParty: "Les Républicains",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 150,
    VSSTrainingBudget: 0,
    shelterPlaces: 20,
  },
  {
    name: "Polynésie française",
    politicalParty: "Tapura huiraatira",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 250,
    VSSTrainingBudget: 0,
    shelterPlaces: 50,
  },
  {
    name: "Saint-Barthélemy",
    politicalParty: "Les Républicains",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 100,
    VSSTrainingBudget: 0,
    shelterPlaces: 50,
  },
  {
    name: "Saint-Martin",
    politicalParty: "Les Répubicains",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 80,
    VSSTrainingBudget: 0,
    shelterPlaces: 20,
  },
  {
    name: "Saint-Pierre-et-Miquelon",
    politicalParty: "Archipel demain",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 30,
    VSSTrainingBudget: 0,
    shelterPlaces: 10,
  },
  {
    name: "Wallis-et-Futuna",
    politicalParty: "Les Républicains",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 20,
    VSSTrainingBudget: 0,
    shelterPlaces: 10,
  },
];

Region.create(regionList)
  .then((list) => {
    console.log(list);
  })
  .catch((error) => {
    console.log(error);
  });

  // mongoose.connection.close()
