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
    condemned: "condamné",
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
    condemned: "condamné",
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
    complaint: 0,
    condemned: "non condamné",
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
    condemned: "en cours",
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
    condemned: "non renseigné",
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
    condemned: "non condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Jeudi 28 janvier à Sevran (Seine-Saint-Denis), Saliha (24 ans) a été tuée par son mari (28 ans) avec un couteau à leur domicile.",
    courtDecision: ["Placé en garde à vue pour HOMICIDE VOLONTAIRE SUR CONJOINT"],
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
    complaint: 0,
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Lundi 1er février à Argenteuil (Val-d'Oise), une femme (73 ans) a succombé à ses blessures à l'hôpital, après avoir été battue et étranglée par son mari (83 ans) 5 jours plus tôt dans leur appartement. À l'hôpital, un médecin qui a examiné la victime a relevé de multiples hématomes au visage, au cou et aux mains mais également des fractures plus anciennes, preuves que la victime était violentée depuis longtemps",
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
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: ["Selon le parquet, une enquête pour \"assassinat suivi du suicide de l'auteur des faits\" est ouverte."],
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
    complaint: 0,
    condemned: "non condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Il s'est présenté de lui-même au commissariat pour avouer les faits ce matin. Il a été placé en garde à vue et une enquête pour HOMICIDE VOLONTAIRE est ouverte #féminicide",
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
    complaint: 0,
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Dimanche 7 février à Fréjus (Var), Iraida (43 ans) a été mortellement poignardée par son compagnon devant leurs propres enfants (9 ans et 14 ans) à leur domicile. Le compagnon qui a tenté de s'enfuir a été empêché par des voisins. Interpellé sur place par les forces de l'ordre, il a été placé en garde à vue pour homicide volontaire par conjoint #féminicide",
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
    condemned: "condamné",
    nbOtherVictims: 1,
    otherVictims: "sa propre mère Simone (87 ans), puis s'est suicidé",
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
    complaint: 0,
    // condemned: "condamné",
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
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Des sources proches de l'enquête indiquent que la victime a été trouvée en \"état de rigidité cadavérique avancée\" et que du sang et des nombreuses marques de coups ont été relevés sur son corps.",
    courtDecision: ["Le septuagénaire a été interpellé sur place et placé en garde à vue pour homicide volontaire par conjoint #féminicide. Vendredi 19 février lors de son audition devant la juge des libertés et de la détention, le septuagénaire a nié les violences, précisant que \"c’est elle qui se les est fait en se cognant dans la porte\" 😡 il a été placé en détention et encourt la réclusion criminelle à perpétuité."],
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
    complaint: 0,
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "uée par son mari David D. (47 ans) par arme à feu et il s'est ensuite suicidé sous les yeux de leur fille (12 ans)",
    courtDecision: ["Selon le parquet de Toulouse, « l’hypothèse du meurtre suivi de suicide est privilégiée sous réserve bien entendu de tout élément ultérieur et des conclusions des autopsies »."],
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
    complaint: 0,
    // condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: ["Le parquet confirme qu'une enquête pour homicide volontaire #féminicide est ouverte et indique également qu'une procédure de médiation avait mis en place en 2015 suite à des faits de violence du conjoint sur la victime."],
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
    complaint: 0,
    // condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "« un écrit a été trouvé sur place, laissant penser à un suicide, l’homme ayant certainement tué sa femme, avant de retourner l’arme contre lui.\" #féminicide",
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
    // condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "morte après avoir été sauvagement battue et poussée dans la Seine par son ex-petit-ami (15 ans) et la nouvelle copine (15 ans) de celui-ci. Son corps immergé, portant de multiples marques de coups, a été découvert quelques heures plus tard par les secours.",
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
    condemned: "condamné",
    nbOtherVictims: 1,
    otherVictims: " Il a également tué leur voisine et aide-ménagère Daisy (57 ans)",
    description: "",
    courtDecision: ["À l'issue de son audition le 12 mars 2021, il a été mis en examen pour meurtre sur conjoint, pour meurtre et placé en détention."],
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
    complaint: 0,
    // condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "Le tueur a tenté de se suicider en ingérant \"des produits et des substances illicites\" et en menaçant de sauter du toit de la maison.",
    description: "poignardée à mort par son compagnon (23 ans) en présence de son bébé de 7 mois.",
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
    complaint: 0,
    condemned: "non condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Il s’est lui même rendu au commissariat de police vers 5 heures du matin, avec du sang sur les mains et s’est accusé du meurtre, expliquant « avoir fait une bêtise ».",
    courtDecision: ["Une enquête a été ouverte par le parquet pour des faits d'homicide par conjoint #féminicide L'homme a été placé en garde à vue et sera présenté à un juge d\'instruction. Une autopsie de la victime est également prévue en début de semaine."],
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
    complaint: 0,
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Une enquête a été ouverte par le parquet pour des faits d'homicide par conjoint #féminicide L\'homme a été placé en garde à vue. Annick était victime de violences conjugales depuis 20 ans, elle avait porté plainte à de multiples reprises, toutes classées sans suite 😡 Comble de la perversion, en 2015 puis 2017, certificats médicaux à l’appui, Nadir Chekab avait porté plainte contre Annick pour violences conjugales ! Elle évite de peu la prison ferme et se voit contrainte de porter, pendant quatre mois, un bracelet électronique 😡 #JusticeComplice",
    courtDecision: [""],
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
    complaint: 0,
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "l'homme a abattu son ex-conjointe avant de se suicider #féminicide",
    description: "prise en otage dans la maison familiale. Ce sont les 2 enfants du couple qui ont alerté les forces de l'ordre en début d'après-midi, précisant que leur père serait porteur d'une arme. Le quartier a immédiatement été bouclé pour des raisons de sécurité et des négociations ont été entamées avec l'homme qui exigeait \"la reprise de la vie commune\" avec son ex-compagne alors qu'ils étaient séparés depuis plusieurs années 😡 #crimedepossession",
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
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Son corps sans vie a été découvert dans la campagne autour de Montauban-de-Bretagne où réside son ex-mari. Il aurait fait appel à des complices, dont ses propres parents âgés de 72 et 75 ans 😱 qui semble-t-il l'ont aidé dans son projet criminel. Lors d'une conférence de presse, le procureur a indiqué que Jérôme Gaillard, l'ex-mari de Magali Blandin, a avoué l'avoir attendue dans son immeuble avant de la tuer à coups de batte de baseball. Puis il a effacé les traces de son crime avant d'enterrer le corps de Magali dans les bois après l'avoir recouverte de chaux vive 😡 le procureur ajoute que \"Ce crime s\'inscrit dans la triste liste des homicides conjugaux #feminicide, on est dans un homicide conjugal assez classique, il y a cette notion de possession de l\'autre, cette notion d\'emprise, cette notion de \'tu ne peux pas partir\' \" #crimedepossession",
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
    condemned: "condamné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "Une enquête a été ouverte par le parquet pour des faits d'homicide par ex-conjoint #féminicide et incendie criminel. L\'homme, actuellement en fuite, est très défavorablement connu des services de police, notamment pour plusieurs procédures de violences conjugales 😡 il avait notamment été condamné en 2018 pour avoir violenté la victime.",
    courtDecision: [""],
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
    console.log(list)
  })
  .catch((err) => console.log(err));

})
.catch(error => console.log(error));
 
// mongoose.connection.close()