let express = require("express");
let router = express.Router();
const User = require('../models/User');
const Region = require('../models/Region')
const Events = require('../models/Event')

/*CRUD admin*/

//List of admins
router.get('/dashboard', (req, res, next) => {
    User.find()
    .then((users) => {
        res.status(200).json(documents)
    })
    .catch((err) => res.status(500).json(err))
});

//One admin
router.get('/dashboard/:adminId', (req, res, next) => {
    User.findById(req.params.adminId)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => res.status(500).json(err));
});

//Update admin info
router.patch('/dashboard/:adminId', (req, res, next) => {
    User.findByIdAndUpdate(req.params.adminId)
    .then((adminToUpdate) => {
        res.status(200).json(adminToUpdate);
    })
    .catch((err) => res.status(500).json(err));
});

//Delete admin info
router.delete('/dashboard/:adminId', (req, res, next) => {
    User.findByIdAndDelete(req.params.adminId)
    .then((adminToDelete) => {
        res.status(200).json(adminToDelete);
    })
    .catch((err) => res.status(500).json(err));
});


/*Event CRUD*/

//List of events
router.get('/dashboard', (req, res, next) => {
    Events.find()
    .then((users) => {
        res.status(200).json(documents)
    })
    .catch((err) => res.status(500).json(err))
});

//One event
router.get('/dashboard/:eventId', (req, res, next) => {
    Events.findById(req.params.eventId)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => res.status(500).json(err));
});

//Update event info
router.patch('/dashboard/:eventId', (req, res, next) => {
    Events.findByIdAndUpdate(req.params.eventId)
    .then((eventToUpdate) => {
        res.status(200).json(eventToUpdate);
    })
    .catch((err) => res.status(500).json(err));
});

//Delete event info
router.delete('/dashboard/:eventId', (req, res, next) => {
    Events.findByIdAndDelete(req.params.eventId)
    .then((eventToDelete) => {
        res.status(200).json(eventToDelete);
    })
    .catch((err) => res.status(500).json(err));
});

//Create new event
router.post('/dashboard', (req, res, next) => {
    Events.create(req.body)
    .then((newEvent) => {
        res.status(201).json(newEvent);
    })
    .catch((err) => res.status(500).json(err));
});

/*REGIONS*/

//List of regions
router.get('/dashboard', (req, res, next) => {
    Region.find()
    .then((regions) => {
        res.status(200).json(regions);
    })
    .catch((err) => res.statuss(500).json(err))
});


//Find infos of one regions
router.get('/dashboard/:regionId', (req, res, next) => {
    Region.findById(req.params.regionId)
    .then((region) => {
        res.status(200).json(region);
    })
    .catch((err) => res.status(500).json(err))
});

//Update infos regions
router.patch('/dashboard/:regionId', (req, res, next) => {
    Region.findByIdAndUpdate(req.params.regionId, req.body)
    .then((regionToUpdate) => {
        res.status(200).json(regionToUpdate);
    })
    .catch((err) => res.status(500).json(err))
});


module.exports = router;