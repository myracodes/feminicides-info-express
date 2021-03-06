const express = require('express');
const router = express.Router();
const Region = require('../models/Region');
const Events = require('../models/Event');

/*List of events*/
router.get('/list/all-events', (req, res, next) => {
    Events.find()
    .populate("region")
    .then((events) => {
        res.status(200).json(events);
    })
    .catch((err) => res.status(500).json(err));
});

/*Get one event*/
router.get('/detail/:eventId', (req, res, next) => {
    Events.findById(req.params.eventId)
    .populate("region")
    .then((event) => {
        res.status(200).json(event);
    })
    .catch((err) => res.status(500).json(err))
});

/*List of regions*/
router.get('/list/all-regions', (req, res, next) => {
    Region.find()
    .populate('events')
    .then((regions) => {
        res.status(200).json(regions);
    })
    .catch((err) => res.status(500).json(err));
});


module.exports = router;