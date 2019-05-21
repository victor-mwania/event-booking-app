const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName = String,
    password: String,
})

const user = mongoose.model('usermodel', userSchema);

module.export = user;