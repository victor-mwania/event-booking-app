const express = require('express');
const router = express.Router();
const events = require('../models/events.model');
const User = require('../models/user.model')
//add a new event to the db
router.post('/sync/addEvents', (req, res) => {
    let event = new events({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        ticket: req.body.ticket,
        price: req.body.price,
        createdBy: req.body.creator
    })
    event.save().then(response => {
        res.json(response)
    }).catch(err => {
        res.send(err)
    })
});

router.post('/sync/book/', (req, res) => {
    User.findOneAndUpdate({_id:req.body.userId},{ $addToSet: { events: req.body.event } }, { new: true }).then(() => {
        res.send("Booked")
    })
})
//get all events from the db
router.get('/sync/getEvents', (req, res) => {
    events.find().then(response => {
        res.json(response)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/sync/myEvents/:user', (req, res) => {
    User.findOne({_id: req.params.user}).then((userEvents) => {
        events.find({"_id" : { "$in" : userEvents.events}}, (err, data)=> {
            if(err) {
                res.send(err)
            }
            else{
                res.json(data)
            }
        })
    })

})
//remove user booked events

router.post('/sync/delEvent/', (req, res) => {
    User.findOneAndUpdate({_id: req.body.user}, {$pull: {events: req.body.event}}, {new: true}).then(()=>{
        res.send("Removed event successfully")
    })
})

module.exports = router;