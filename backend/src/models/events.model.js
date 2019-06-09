const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: String,
    description: String,
    location: String,
    date: String,
    creator: String,
    price: String

})

const events = mongoose.model('eventsModel', eventSchema);

module.exports = events;