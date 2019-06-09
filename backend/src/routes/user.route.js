const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const config = require('../config');
const passport = require('passport');

router.post('/sync/user/signup', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw (err)
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) throw (err)
            else {
                console.log(req.body.userName, hash)
                let user = new User({
                    userName: req.body.userName,
                    password: hash
                })

                user.save().then(function (result) {
                    console.log(result)
                    res.json(result);
                }).catch(error => {
                    res.send(error)
                })
            }

        })
    })
});

router.post('/sync/user/login', (req, res) => {
    console.log(req.body)
    User.findOne({
        userName: req.body.userName
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

router.get('/sync/user/:user_id', (req, res) => {
    User.findById(req.params.user_id, ).then(function (err, user) {
        if (err) {
            res.send(err)
        } else {
            res.json(user)
        }
    }).catch(err => res.send(err))
});

module.exports = router;