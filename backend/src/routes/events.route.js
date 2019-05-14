const express = require('express');
const router = express.Router();
const events = require('../models/events.model');

//add a new event to the db
router.post('/sync/addEvents', (req, res) => {
    let event = new events({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        ticket: req.body.ticket
    })
    event.save().then(response => {
        res.json(response)
    }).catch(err => {
        res.send(err)
    })
});

//get all events from the db
router.get('/sync/getEvents', (req, res) => {
    events.find().then(response => {
        res.json(response)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router;
