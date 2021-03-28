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
      lng: 166.57026188296064,
      lat: -22.26312626887685
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
      lng: 0.09002944610860664,
      lat: 48.4321496844861
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
    coordinates: {
      lng: 1.0011271083580295,
      lat: 46.3794172605931
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
      lng: -63.05578356711669,
      lat: 18.10179201305977
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
      lng: 1.9707160675381856,
      lat: 48.97902345914507
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
    date: "2021-01-28T00:00:00.000Z",
    city: "Sevran (Seine-Saint-Denis)",
    firstName: "Saliha",
    lastName: "",
    age: 24,
    coordinates: {
      lng: 48.94048843079504,
      lat: 2.5328820397027756
    },
    relationship: "compagnon",
    killerAge: 28,
    complaint: 0,
    condemned: false,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Jeudi 28 janvier à Sevran (Seine-Saint-Denis), Saliha (24 ans) a été tuée par son mari (28 ans) avec un couteau à leur domicile.",
    courtDecision: ["Placé en garde à vue pour HOMICIDE VOLONTAIRE SUR CONJOINT"],
    pressArticles: ["https://www.laprovence.com/actu/en-direct/6249811/seine-saint-denis-une-femme-tuee-a-larme-blanche-son-mari-arrete.html", "https://www.facebook.com/1254619207882437/posts/4049740768370253/"],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 7,
    date: "2021-02-01T00:00:00.000Z",
    city: "Argenteuil (Val d'Oise)",
    firstName: "Une femme",
    lastName: "",
    age: 73,
    coordinates: {
      lng: 48.951854992320555,
      lat: 2.232156969314413
    },
    relationship: "non renseigné",
    killerAge: 83,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Lundi 1er février à Argenteuil (Val-d'Oise), une femme (73 ans) a succombé à ses blessures à l'hôpital, après avoir été battue et étranglée par son mari (83 ans) 5 jours plus tôt dans leur appartement. À l'hôpital, un médecin qui a examiné la victime a relevé de multiples hématomes au visage, au cou et aux mains mais également des fractures plus anciennes, preuves que la victime était violentée depuis longtemps",
    courtDecision: ["mis en examen pour HOMICIDE VOLONTAIRE #féminicide et violences habituelles par conjoint."],
    pressArticles: ["https://www.leparisien.fr/val-d-oise-95/val-d-oise-une-femme-de-73-ans-etranglee-par-son-mari-02-02-2021-8422764.php", "https://www.facebook.com/1254619207882437/posts/4062125107131819/"],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 8,
    date: "2021-02-01T00:00:00.000Z",
    city: "La Celle-Saint-Cloud (Yvelines)",
    firstName: "Caroline",
    lastName: "B.",
    age: 29,
    coordinates: {
      lng: 48.84707555157467, 
      lat: 2.1362036551354127
    },
    relationship: "non renseigné",
    killerAge: 31,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: ["Selon le parquet, une enquête pour \"assassinat suivi du suicide de l'auteur des faits\" est ouverte."],
    pressArticles: ["https://actu.fr/ile-de-france/la-celle-saint-cloud_78126/yvelines-deux-policiers-retrouves-morts-a-la-celle-saint-cloud-il-s-agirait-d-un-drame-extra-conjugal_39167269.html",
  "https://www.facebook.com/1254619207882437/posts/4062502700427393/"],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 9,
    date: "2021-02-04T00:00:00.000Z",
    city: "Cabourg (Calvados)",
    firstName: "Laura",
    lastName: "",
    age: 34,
    coordinates: {
      lng: 49.28613007839378,
      lat: -0.11826100226006457
    },
    relationship: "ex-compagnon",
    killerAge: 21,
    complaint: 0,
    condemned: false,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Il s'est présenté de lui-même au commissariat pour avouer les faits ce matin. Il a été placé en garde à vue et une enquête pour HOMICIDE VOLONTAIRE est ouverte #féminicide",
    courtDecision: [""],
    pressArticles: ["https://www.ouest-france.fr/normandie/cabourg-14390/normandie-une-femme-retrouvee-morte-dans-un-hotel-de-cabourg-ce-jeudi-matin-7142744", "https://www.facebook.com/1254619207882437/posts/4065921040085559/"],
    commemoration: [""],
    // region: []
  },
  {
    eventNumber: 10,
    date: "2021-02-07T00:00:00.000Z",
    city: "Fréjus (Var)",
    firstName: "Iraida",
    lastName: "",
    age: 43,
    coordinates: {
      lng: 43.453396883326526, 
      lat: 6.72601384903017
    },
    relationship: "compagnon",
    killerAge: 71,
    complaint: 0,
    condemned: true,
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Dimanche 7 février à Fréjus (Var), Iraida (43 ans) a été mortellement poignardée par son compagnon devant leurs propres enfants (9 ans et 14 ans) à leur domicile. Le compagnon qui a tenté de s'enfuir a été empêché par des voisins. Interpellé sur place par les forces de l'ordre, il a été placé en garde à vue pour homicide volontaire par conjoint #féminicide",
    courtDecision: [""],
    pressArticles: ["https://www.nicematin.com/faits-divers/un-homme-tue-sa-compagne-a-coups-de-couteau-devant-ses-deux-enfants-a-frejus-641860", "https://www.facebook.com/1254619207882437/posts/4074229509254712/"],
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