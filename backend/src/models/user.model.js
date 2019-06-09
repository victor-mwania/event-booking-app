const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    events: [String]
})

const user = mongoose.model('usermodel', userSchema);

module.exports = user;