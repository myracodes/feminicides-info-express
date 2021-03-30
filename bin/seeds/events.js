require("dotenv").config();
require("../../config/dbConnection");
const mongoose = require("mongoose");

const Events = require('../../models/Event');
const Regions = require('../../models/Region');

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
    condemned: "en cours",
    nbOtherVictims: 1,
    otherVictims: "sa mère",
    description: "",
    courtDecision: [""],
    pressArticles: [
      "https://la1ere.francetvinfo.fr/nouvellecaledonie/deux-morts-dans-une-affaire-de-violence-conjugale-908058.html",
      "https://www.facebook.com/1254619207882437/posts/3976503899027274/",
    ],
    commemoration: [""],
    region: ""
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
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: ["Mis en examen pour assassinat et écroué. La préméditation a été retenue. "],
    pressArticles: [
      "https://www.ouest-france.fr/normandie/alencon-61000/meurtre-a-alencon-l-ex-conjoint-en-garde-a-vue-les-armes-du-crime-recherchees-7120398",
      "https://www.facebook.com/1254619207882437/posts/4013193792024951/",
    ],
    commemoration: [""],
    region: ""
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
    complaint: 1,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [
      'Une enquête pour homicide volontaire sur conjoint est ouverte.',
    ],
    pressArticles: [
      "https://www.lanouvellerepublique.fr/vienne/commune/bourg-archambault/bourg-archambault-un-couple-retrouve-mort-dans-sa-maison",
      "https://www.facebook.com/1254619207882437/posts/4031310603546603/",
    ],
    commemoration: [""],
    region: ""
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
    condemned: "non renseigné",
    nbOtherVictims: 1,
    otherVictims: "Teddy, 25 ans, qui pourrait être le nouveau compagnon de Rosa",
    description: "",
    courtDecision: [""],
    pressArticles: [
      "https://www.smn-news.com/st-maarten-st-martin-news/36656-triangle-love-affair-possible-motive-for-triple-homicide.html",
      "https://www.facebook.com/1254619207882437/posts/4043605308983799/",
    ],
    commemoration: [""],
    region: ""
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
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: 0,
    description: "",
    courtDecision: [
      "Placé en garde à vue pour homicide volontaire sur conjoint.",
    ],
    pressArticles: [
      "https://www.leparisien.fr/yvelines-78/yvelines-une-femme-retrouvee-pendue-a-verneuil-sur-seine-son-conjoint-en-garde-a-vue-29-01-2021-8421895.php",
      "https://www.facebook.com/1254619207882437/posts/4049461931731470/",
    ],
    commemoration: [""],
    region: ""
  },
  {
    eventNumber: 6,
    date: "2021-01-28T00:00:00.000Z",
    city: "Sevran (Seine-Saint-Denis)",
    firstName: "Saliha",
    lastName: "",
    age: 24,
    coordinates: {
      lng: 2.5328820397027756,
      lat: 48.94048843079504
    },
    relationship: "compagnon",
    killerAge: 28,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Saliha a été tuée par arme blanche au domicile conjugual.",
    courtDecision: ["Placé en garde à vue pour homicide volontaire sur conjoint."],
    pressArticles: ["https://www.laprovence.com/actu/en-direct/6249811/seine-saint-denis-une-femme-tuee-a-larme-blanche-son-mari-arrete.html", "https://www.facebook.com/1254619207882437/posts/4049740768370253/"],
    commemoration: [""],
    region: ""
  },
  {
    eventNumber: 7,
    date: "2021-02-01T00:00:00.000Z",
    city: "Argenteuil (Val d'Oise)",
    firstName: "Une femme",
    lastName: "",
    age: 73,
    coordinates: {
      lng: 2.232156969314413,
      lat: 48.951854992320555
    },
    relationship: "non renseigné",
    killerAge: 83,
    complaint: 2,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "La victime a succombé à ses blessures à l'hôpital, après avoir été battue et étranglée par son mari 5 jours plus tôt dans leur appartement. À l'hôpital, un médecin qui a examiné la victime a relevé de multiples hématomes au visage, au cou et aux mains mais également des fractures plus anciennes.",
    courtDecision: ["mis en examen pour HOMICIDE VOLONTAIRE #féminicide et violences habituelles par conjoint."],
    pressArticles: ["https://www.leparisien.fr/val-d-oise-95/val-d-oise-une-femme-de-73-ans-etranglee-par-son-mari-02-02-2021-8422764.php", "https://www.facebook.com/1254619207882437/posts/4062125107131819/"],
    commemoration: [""],
    region: ""
  },
  {
    eventNumber: 8,
    date: "2021-02-01T00:00:00.000Z",
    city: "La Celle-Saint-Cloud (Yvelines)",
    firstName: "Caroline",
    lastName: "B.",
    age: 29,
    coordinates: {
      lng: 2.1362036551354127, 
      lat: 48.84707555157467
    },
    relationship: "non renseigné",
    killerAge: 31,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: ["Selon le parquet, une enquête pour assassinat suivi du suicide de l'auteur des faits est ouverte."],
    pressArticles: ["https://actu.fr/ile-de-france/la-celle-saint-cloud_78126/yvelines-deux-policiers-retrouves-morts-a-la-celle-saint-cloud-il-s-agirait-d-un-drame-extra-conjugal_39167269.html",
  "https://www.facebook.com/1254619207882437/posts/4062502700427393/"],
    commemoration: [""],
    region: ""
  },
  {
    eventNumber: 9,
    date: "2021-02-04T00:00:00.000Z",
    city: "Cabourg (Calvados)",
    firstName: "Laura",
    lastName: "",
    age: 34,
    coordinates: {
      lng: -0.11826100226006457,
      lat: 49.28613007839378
    },
    relationship: "ex-compagnon",
    killerAge: 21,
    complaint: 1,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Fait avoué. Il a été placé en garde à vue et une enquête pour homicide volontaire est ouverte.",
    courtDecision: [""],
    pressArticles: ["https://www.ouest-france.fr/normandie/cabourg-14390/normandie-une-femme-retrouvee-morte-dans-un-hotel-de-cabourg-ce-jeudi-matin-7142744", "https://www.facebook.com/1254619207882437/posts/4065921040085559/"],
    commemoration: [""],
    region: ""
  },
  {
    eventNumber: 10,
    date: "2021-02-07T00:00:00.000Z",
    city: "Fréjus (Var)",
    firstName: "Iraida",
    lastName: "",
    age: 43,
    coordinates: {
      lng: 6.72601384903017, 
      lat: 43.453396883326526
    },
    relationship: "compagnon",
    killerAge: 71,
    complaint: 2,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Iraida a été mortellement poignardée par son compagnon, à leur domicile, devant leurs enfants (9 ans et 14 ans). Le compagnon, qui a tenté de s'enfuir, a été empêché par des voisins. Interpellé sur place par les forces de l'ordre, il a été placé en garde à vue pour homicide volontaire sur conjoint.",
    courtDecision: [""],
    pressArticles: ["https://www.nicematin.com/faits-divers/un-homme-tue-sa-compagne-a-coups-de-couteau-devant-ses-deux-enfants-a-frejus-641860", "https://www.facebook.com/1254619207882437/posts/4074229509254712/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 11,
    date: "2021-02-14T00:00:00.000Z",
    city: "Arfeuille-Châtain (Creuse)",
    firstName: "Martine",
    lastName: "",
    age: 61,
    coordinates: {
      lng: 2.434850681275709,  
      lat: 46.07047692761232
    },
    relationship: "compagnon",
    killerAge: 64,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 1,
    otherVictims: "Simone (87 ans), la mère du tueur.",
    description: "",
    courtDecision: [""],
    pressArticles: ["https://www.lamontagne.fr/arfeuille-chatain-23700/actualites/une-enquete-ouverte-pour-homicide-apres-la-decouverte-de-trois-corps-a-arfeuille-chatain-creuse_13915973/", "https://www.facebook.com/feminicide/posts/4095026607175002"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 12,
    date: "2021-02-16T00:00:00.000Z",
    city: "Bordeaux (Gironde)",
    firstName: "Stéphanie",
    lastName: "",
    age: 31,
    coordinates: {
      lng: -0.5679839461180656, 
      lat:  44.83693085531955
    },
    relationship: "compagnon",
    killerAge: 35,
    complaint: 3,
    condemned: "non renseigné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: [""],
    pressArticles: ["https://www.sudouest.fr/gironde/bordeaux/bordeaux-une-femme-se-tue-apres-une-chute-du-quatrieme-etage-1340014.php", "https://www.facebook.com/1254619207882437/posts/4097862726891390/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 13,
    date: "2021-02-01T00:00:00.000Z",
    city: "Charmes (Vosges)",
    firstName: "Muriel",
    lastName: "Etienne",
    age: 47,
    coordinates: {
      lng: 6.295945388868495, 
      lat: 48.38266495650212
    },
    relationship: "compagnon",
    killerAge: 74,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 3,
    otherVictims: "",
    description: "Des sources proches de l'enquête indiquent que Muriel a été trouvée en état de rigidité cadavérique avancée avec du sang et de nombreuses marques de coups sur le corps.",
    courtDecision: ["Interpellé sur place et placé en garde à vue pour homicide volontaire sur conjoint. Il a nié les faits, a été placé en détention et encourt la réclusion criminelle à perpétuité."],
    pressArticles: ["https://www.vosgesmatin.fr/faits-divers-justice/2021/02/17/charmes-un-septuagenaire-suspecte-du-meurtre-d-une-femme", "https://www.facebook.com/1254619207882437/posts/4100727519938244/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 14,
    date: "2021-02-24T00:00:00.000Z",
    city: "Sabonnères (Haute-Garonne)",
    firstName: "Stella",
    lastName: "",
    age: 46,
    coordinates: {
      lng: 1.057905355376011, 
      lat: 43.46706766153583
    },
    relationship: "compagnon",
    killerAge: 47,
    complaint: 2,
    condemned: "suicide après acte",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Stella a tuée par arme à feu devant sa fille (12 ans).",
    courtDecision: ["Selon le parquet de Toulouse, « l’hypothèse du meurtre suivi de suicide est privilégiée »."],
    pressArticles: ["https://actu.fr/occitanie/sabonneres_31464/pres-de-toulouse-un-couple-retrouve-mort-a-son-domicile-leur-fille-de-12-ans-donne-l-alerte_39730262.html", "https://www.facebook.com/feminicide/posts/4119563304721332"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 15,
    date: "2021-03-04T00:00:00.000Z",
    city: "Lyon (Rhône)",
    firstName: "Fatima",
    lastName: "",
    age: 30,
    coordinates: {
      lng: 4.8734643709761905, 
      lat: 45.75793453639808
    },
    relationship: "ex-compagnon",
    killerAge: 32,
    complaint: 3,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Le parquet indique qu'une procédure de médiation avait été mise en place en 2015 suite à des faits de violence du conjoint sur Fatima.",
    courtDecision: ["Le parquet confirme qu'une enquête pour homicide volontaire est ouverte."],
    pressArticles: ["https://www.lyonmag.com/article/113840/lyon-une-femme-de-27-ans-tuee-par-son-conjoint-a-coups-de-marteau", "https://www.facebook.com/1254619207882437/posts/4149486975062298/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 16,
    date: "2021-03-07T00:00:00.000Z",
    city: "Gujan-Mestras (Gironde)",
    firstName: "Jeannette",
    lastName: "D.",
    age: 87,
    coordinates: {
      lng: -1.0747517771720074, 
      lat: 44.63140764576726
    },
    relationship: "compagnon",
    killerAge: 80,
    complaint: 2,
    condemned: "suicide après acte",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Un écrit a été trouvé sur place, laissant penser à un suicide. Mais le tueur a certainement tué Jeannette, avant de retourner l’arme contre lui.",
    courtDecision: [""],
    pressArticles: ["https://www.20minutes.fr/faits_divers/2993135-20210307-bassin-arcachon-corps-vie-deux-personnes-agees-decouverts-maison", "https://www.facebook.com/1254619207882437/posts/4155613077783021/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 17,
    date: "2021-03-08T00:00:00.000Z",
    city: "Argenteuil (Val-d'Oise)",
    firstName: "Alisha",
    lastName: "",
    age: 14,
    coordinates: {
      lng: 2.2402250481120713,  
      lat: 48.9517422633757
    },
    relationship: "ex-compagnon",
    killerAge: 15,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Alisha a été sauvagement battue et poussée dans la Seine. Son corps immergé, portant de multiples marques de coups, a été découvert quelques heures plus tard par les secours.",
    courtDecision: [""],
    pressArticles: ["https://www.leparisien.fr/val-d-oise-95/adolescente-retrouvee-morte-noyee-a-argenteuil-une-histoire-de-jalousie-entre-filles-09-03-2021-8427813.php", "https://www.facebook.com/1254619207882437/posts/4160901687254160/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 18,
    date: "2021-03-10T00:00:00.000Z",
    city: "Saint-Joseph (La Réunion)",
    firstName: "Une femme",
    lastName: "",
    age: 78,
    coordinates: {
      lng: 55.607833533558484,
      lat: -21.356181995430244
    },
    relationship: "compagnon",
    killerAge: 85,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 1,
    otherVictims: "Daisy, leur aide ménagère (57 ans) et leur voisine",
    description: "",
    courtDecision: ["Mis en examen à l'issue de son audition pour meurtre sur conjoint. Placé en détention."],
    pressArticles: ["https://la1ere.francetvinfo.fr/reunion/saint-joseph/double-homicide-a-saint-joseph-un-homme-tue-sa-femme-et-sa-voisine-954715.html", "https://www.facebook.com/1254619207882437/posts/4162368587107470/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 19,
    date: "2021-03-11T00:00:00.000Z",
    city: "Champagne sur Oise (Val d'Oise)",
    firstName: "Sandrine",
    lastName: "",
    age: 23,
    coordinates: {
      lng: 2.232137421281787, 
      lat: 49.143086447536845
    },
    relationship: "compagnon",
    killerAge: 23,
    complaint: 1,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Sandrine a été poignardée à mort en présence de son bébé de 7 mois. Le tueur a ensuite tenté de se suicider en ingérant des produits et substances illicites et en menaçant de sauter du toit de la maison.",
    courtDecision: [""],
    pressArticles: ["https://actu.fr/ile-de-france/champagne-sur-oise_95134/val-d-oise-une-femme-tuee-a-coups-de-couteau-a-champagne-sur-oise-son-mari-principal-suspect-a-tente-de-se-suicider_40167892.html", "https://www.facebook.com/feminicide/posts/4167984316545897"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 20,
    date: "2021-03-12T00:00:00.000Z",
    city: "Mably (Loire)",
    firstName: "Amélie",
    lastName: "Amar",
    age: 34,
    coordinates: {
      lng: 4.065909682440045, 
      lat: 46.090715282468764
    },
    relationship: "ex-compagnon",
    killerAge: 32,
    complaint: 2,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Le tueur s'est rendu au commissariat de police avec du sang sur les mains et s’est accusé du meurtre.",
    courtDecision: ["Placé en garde à vue. Une enquête a été ouverte par le parquet pour des faits d'homicide sur conjoint."],
    pressArticles: ["https://www.leprogres.fr/amp/faits-divers-justice/2021/03/13/mably-une-femme-tuee-a-coups-de-couteau-son-compagnon-en-garde-a-vue", "https://www.facebook.com/feminicide/posts/4171024762908519"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 21,
    date: "2021-03-07T00:00:00.000Z",
    city: "Tucquegnieux (Meurthe-et-Moselle)",
    firstName: "Annick",
    lastName: "",
    age: 51,
    coordinates: {
      lng: 5.894975600043835, 
      lat: 49.3155383679355
    },
    relationship: "ex-compagnon",
    killerAge: 54,
    complaint: 5,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Annick était victime de violences conjugales depuis 20 ans, elle avait porté plainte à de multiples reprises, toutes classées sans suite.",
    courtDecision: ["Placé en garde à vue. Une enquête pour des faits d'homicide est ouverte"],
    pressArticles: ["https://www.republicain-lorrain.fr/faits-divers-justice/2021/03/13/une-femme-retrouvee-sans-vie-a-son-domicile-le-compagnon-interpelle", "https://www.facebook.com/1254619207882437/posts/4171349796209349/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 22,
    date: "2021-03-14T00:00:00.000Z",
    city: "Folschviller (Moselle)",
    firstName: "Peggy",
    lastName: "",
    age: 45,
    coordinates: {
      lng: 6.685497184585262, 
      lat: 49.07891316208137
    },
    relationship: "ex-compagnon",
    killerAge: 58,
    complaint: 2,
    condemned: "suicide après acte",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Prise en otage dans la maison familiale. Les 2 enfants du couple ont alerté les forces de l'ordre. Il exigeait \"la reprise de la vie commune\" après plusieurs années de séparation.",
    courtDecision: ["Le procureur de la République de Sarreguemines, Olivier Glady confirme qu'il s'agit « d'un féminicide (...) sur fond de séparation conjugale » suivi d'un suicide de l'auteur des faits."],
    pressArticles: ["https://www.francebleu.fr/infos/faits-divers-justice/l-homme-retranche-en-moselle-et-son-ex-compagne-retenue-en-otage-retrouves-morts-1615765907", "https://www.facebook.com/1254619207882437/posts/4175465852464410/"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 23,
    date: "2021-02-10T00:00:00.000Z",
    city: "Montfort-sur-Meu (Ille-et-Vilaine)",
    firstName: "Magali",
    lastName: "Blandin",
    age: 42,
    coordinates: {
      lng: -1.958416572131148, 
      lat: 48.13032336615626
    },
    relationship: "ex-compagnon",
    killerAge: 45,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Le corps de Magali a été découvert sans vie et recouvert de chaux dans la campagne autour de Montauban-de-Bretagne, lieu de résidence de son ex-mari. Il aurait fait appel à des complices, dont ses propres parents âgés de 72 et 75 ans. Le tueur a avoué l'avoir attendue dans son immeuble avant de la tuer à coups de batte de baseball. Il a ensuite effacé les traces de son crime avant d'enterrer le corps de Magali dans les bois.",
    courtDecision: [""],
    pressArticles: ["https://amp.ouest-france.fr/bretagne/rennes-35000/bretagne-le-corps-de-magali-blandin-retrouve-pres-de-rennes-7194435", "https://www.facebook.com/feminicide/posts/4193207437356918"],
    commemoration: [""],
    region: "",
  },
  {
    eventNumber: 24,
    date: "2021-03-20T00:00:00.000Z",
    city: "Perpignan (Pyrénées-Orientales)",
    firstName: "Une femme",
    lastName: "",
    age: 55,
    coordinates: {
      lng: 2.9089627224715784, 
      lat: 42.68653877464594
    },
    relationship: "ex-compagnon",
    killerAge: 55,
    complaint: 0,
    condemned: "en cours",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Le tueur, actuellement en fuite, est très défavorablement connu des services de police, notamment pour plusieurs procédures de violences conjugales sur la victime (2018).",
    courtDecision: ["Une enquête a été ouverte par le parquet pour des faits d'homicide par ex-conjoint et incendie criminel."],
    pressArticles: ["https://www.ladepeche.fr/2021/03/21/feminicide-un-homme-recherche-a-perpignan-apres-le-meurtre-de-son-ex-compagne-9441101.php", "https://www.facebook.com/1254619207882437/posts/4195166900494305/"],
    commemoration: [""],
    region: "",
  }
];

Regions.find()
.then(regionsList => {
  
  regionsList.forEach(regions => console.log("random id: ", regionsList[Math.floor(Math.random() * Math.floor(regionsList.length))]._id))
  events.forEach(event => {
    event.region = regionsList[Math.floor(Math.random() * Math.floor(regionsList.length))]._id;
  });
})
.then( () => {
  Events.create(events)
  .then((list) => {
    list.forEach(event => {
      Regions.findByIdAndUpdate(event.region, { $push: { events: event._id }})
      .then(editedRegion => {
        console.log("Event added to the region ", editedRegion);
      })
      .catch(error => console.log(error));
    })
    console.log(list);
  })
  .catch((err) => console.log(err));

})
.catch(error => console.log(error));
 
// mongoose.connection.close();
