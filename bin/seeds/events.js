require("dotenv").config();
require("../../config/dbConnection");
const mongoose = require("mongoose");

const Events = require('../../models/Event')

const events = [{
    eventNumber: 1,
    date: "2021-01-03T00:00:00.000Z",
    city: "Mont-Dore (Nouvelle-Calédonie)",
    firstName: "Ashley",
    lastName: "",
    age: 16,
    coordinates: {
      lng:166.57026188296064,
      lat:-22.26312626887685
    },
    relationship: "compagnon",
    killerAge: 19,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 1,
    otherVictims: "sa mère",
    description: "",
    courtDecision: [""],
    pressArticles: [
      "https://la1ere.francetvinfo.fr/nouvellecaledonie/deux-morts-dans-une-affaire-de-violence-conjugale-908058.html",
      "https://www.facebook.com/1254619207882437/posts/3976503899027274/",
    ],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 2,
    date: "2021-01-14T00:00:00.000Z",
    city: "Alençon (Orne)",
    firstName: "Laura",
    lastName: "Tavares",
    age: 21,
    coordinates: {
      lng:0.09002944610860664,
      lat:48.4321496844861
    },
    relationship: "ex-compagnon",
    killerAge: 21,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [
      "Placé en garde à vue, il devrait prochainement être mis en examen pour homicide volontaire #féminicide. La préméditation a été retenue. Il a été mis en examen pour assassinat et écroué.",
    ],
    pressArticles: [
      "https://www.ouest-france.fr/normandie/alencon-61000/meurtre-a-alencon-l-ex-conjoint-en-garde-a-vue-les-armes-du-crime-recherchees-7120398",
      "https://www.facebook.com/1254619207882437/posts/4013193792024951/",
    ],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 3,
    date: "2021-01-21T00:00:00.000Z",
    city: "Bourg-Archambault (Vienne)",
    firstName: "Annie",
    lastName: "Rullier",
    age: 70,
    coordinates:{
      lng:1.0011271083580295,
      lat:46.3794172605931
    },
    relationship: "compagnon",
    killerAge: 76,
    complaint: 0,
    condemned: false,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [
      'une enquête pour "homicide volontaire sur conjoint" est ouverte',
    ],
    pressArticles: [
      "https://www.lanouvellerepublique.fr/vienne/commune/bourg-archambault/bourg-archambault-un-couple-retrouve-mort-dans-sa-maison",
      "https://www.facebook.com/1254619207882437/posts/4031310603546603/",
    ],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 4,
    date: "2021-01-25T00:00:00.000Z",
    city: "Grand-Case (Saint-Martin)",
    firstName: "Rosa",
    lastName: "Reyes",
    age: 41,
    coordinates: {
      lng:-63.05578356711669,
      lat:18.10179201305977
    },
    relationship: "ex-compagnon",
    killerAge: 40,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 1,
    otherVictims: "Teddy, 25 ans, qui pourrait être le nouveau compagnon de Rosa",
    description: "",
    courtDecision: [""],
    pressArticles: [
      "https://www.smn-news.com/st-maarten-st-martin-news/36656-triangle-love-affair-possible-motive-for-triple-homicide.html",
      "https://www.facebook.com/1254619207882437/posts/4043605308983799/",
    ],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 5,
    date: "2021-01-28T00:00:00.000Z",
    city: "Verneuil-sur-Seine (Yvelines)",
    firstName: "Isabelle",
    lastName: "",
    age: 27,
    coordinates: {
      lng:1.9707160675381856,
      lat:48.97902345914507
    },
    relationship: "compagnon",
    killerAge: 28,
    complaint: 3,
    condemned: false,
    nbOtherVictims: 0,
    otherVictims: 0,
    description: "",
    courtDecision: [
      "Il a été placé en garde à vue pour HOMICIDE VOLONTAIRE SUR CONJOINT.",
    ],
    pressArticles: [
      "https://www.leparisien.fr/yvelines-78/yvelines-une-femme-retrouvee-pendue-a-verneuil-sur-seine-son-conjoint-en-garde-a-vue-29-01-2021-8421895.php",
      "https://www.facebook.com/1254619207882437/posts/4049461931731470/",
    ],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 6,
    date: "2021-02-15T00:00:00.000Z",
    city: "",
    firstName: "Saliha",
    lastName: "",
    age: 0,
    coordinates: [],
    relationship: "non renseigné",
    killerAge: 0,
    complaint: 0,
    condemned: false,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [""],
    pressArticles: [""],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 7,
    date: "2021-02-09T00:00:00.000Z",
    city: "",
    firstName: "Une femme",
    lastName: "",
    age: 0,
    coordinates: [],
    relationship: "non renseigné",
    killerAge: 0,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [""],
    pressArticles: [""],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 8,
    date: "2021-03-10T00:00:00.000Z",
    city: "",
    firstName: "Caroline",
    lastName: "",
    age: 0,
    coordinates: [],
    relationship: "non renseigné",
    killerAge: 0,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [""],
    pressArticles: [""],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 9,
    date: "2021-02-05T00:00:00.000Z",
    city: "",
    firstName: "Laura",
    lastName: "",
    age: 0,
    coordinates: [],
    relationship: "ex-compagnon",
    killerAge: 0,
    complaint: 0,
    condemned: false,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [""],
    pressArticles: [""],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 10,
    date: "2021-02-01T00:00:00.000Z",
    city: "",
    firstName: "Iraida",
    lastName: "",
    age: 0,
    coordinates: [],
    relationship: "compagnon",
    killerAge: 0,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [""],
    pressArticles: [""],
    commemoration: [""],
    // region: [],
  },
];

Events.create(events)
  .then((list) => {
    console.log(list)
  })
  .catch((err) => console.log(err));

//mongoose.connection.close()