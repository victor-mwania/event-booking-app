const mongoose = require('mongoose');

const eventScheme = mongoose.Schema({
    name: String,
    description: String,
    location: String,
    date: String,
    time: String,
    ticket: Number

})

const events = mongoose.model('eventsModel', eventScheme);

module.exports = events;
