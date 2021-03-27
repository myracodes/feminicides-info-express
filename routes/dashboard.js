let express = require("express");
let router = express.Router();
const User = require("../models/User");
const Region = require("../models/Region");
const Events = require("../models/Event");
const uploader = require('../config/cloudinary')
let adminRights = require('../middlewares/adminRights')

/*CRUD admin*/

//List of admins
router.get("/dashboard/all-users", (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json(err));
});

//One admin
router.get("/dashboard/:adminId", (req, res, next) => {

  console.log(req.params.adminId)

  User.findById(req.params.adminId)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.status(500).json(err));
});

//Update admin info
router.patch("/dashboard/:adminId", (req, res, next) => {
  User.findByIdAndUpdate(req.params.adminId)
    .then((adminToUpdate) => {
      res.status(200).json(adminToUpdate);
    })
    .catch((err) => res.status(500).json(err));
});

//Delete admin info
router.delete("/dashboard/:adminId", adminRights, (req, res, next) => {
  User.findByIdAndDelete(req.params.adminId)
    .then((adminToDelete) => {
      res.status(200).json(adminToDelete);
    })
    .catch((err) => res.status(500).json(err));
});

/*Event CRUD*/

//List of events
router.get("/dashboard/all-events", (req, res, next) => {
  Events.find()
    .populate("region")
    .then((users) => {
      res.status(200).json(documents);
    })
    .catch((err) => res.status(500).json(err));
});

//One event
router.get("/dashboard/:eventId", (req, res, next) => {
  Events.findById(req.params.eventId)
    .populate("region")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.status(500).json(err));
});

//Update event info
router.patch("/dashboard/:eventId", uploader.single('picture'), (req, res, next) => {
  Events.findByIdAndUpdate(req.params.eventId)
    .populate("region")
    .then((eventToUpdate) => {
      res.status(200).json(eventToUpdate);
    })
    .catch((err) => res.status(500).json(err));
});

//Delete event info
router.delete("/dashboard/:eventId", (req, res, next) => {
  Events.findByIdAndDelete(req.params.eventId)
    .then((eventToDelete) => {
      res.status(200).json(eventToDelete);
    })
    .catch((err) => res.status(500).json(err));
});

//Create new event
router.post("/dashboard", uploader.single('picture'), (req, res, next) => {
  Events.create(req.body)
    .then((newEvent) => {
      res.status(201).json(newEvent);
    })
    .catch((err) => res.status(500).json(err));
});

/*REGIONS*/

//List of regions
router.get("/dashboard/all-regions", (req, res, next) => {
  Region.find()
    .populate("events")
    .then((regions) => {
      res.status(200).json(regions);
    })
    .catch((err) => res.statuss(500).json(err));
});

//Find infos of one regions
router.get("/dashboard/:regionId", (req, res, next) => {
  Region.findById(req.params.regionId)
    .populate("events")
    .then((region) => {
      res.status(200).json(region);
    })
    .catch((err) => res.status(500).json(err));
});

//Update infos regions
router.patch("/dashboard/:regionId", (req, res, next) => {
  Region.findByIdAndUpdate(req.params.regionId, req.body)
    .populate("events")
    .then((regionToUpdate) => {
      res.status(200).json(regionToUpdate);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
