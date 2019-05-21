const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const config = require('../config');

router.post('/sync/user/signup', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw (err)
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) throw (err)
            else {
                const user = new User({
                    userName: req.body.userName,
                    password: hash
                });
                user.save().then(function (result) {
                    res.json(result);
                }).catch(error => {
                    res.send(error)
                })
            }

        })
    })
});

router.post('/sync/user/login', (req, res, next) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            res.send(err)
        } else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) throw (err)
                const token = jwt.sign({
                    id: user._id
                }, config.secret, {
                    expiresIn: 86400
                });
                res.json({
                    auth: true,
                    token: token,
                    id: user._id,
                    userName: user.userName,
                })
            })
        }
    })
});



module.exports = router;