const express = require('express');
const router = express.Router();
const Region = require('../models/Region')
const Events = require('../models/Event')

/*List of events*/
router.get('/', (req, res, next) => {
    Events.find()
    .populate("region")
    .then((events) => {
        res.status(200).json(events);
    })
    .catch((err) => res.status(500).json(err));
})

/*Get one event*/
router.get('/:eventId', (req, res, next) => {
    Events.findById(req.params.eventId)
    .populate("region")
    .then((event) => {
        res.status(200).json(event);
    })
    .catch((err) => res.status(500).json(err))
})

module.exports = router;