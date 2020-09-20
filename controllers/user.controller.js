require('dotenv').config();
const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        phoneNumber: req.body.phoneNumber,
        avatar: req.body.avatar
    })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({
                    id: user.id
                }, process.env.JWT_SECRET, {
                    expiresIn: 60 * 60 * 24
                })
                res.json({
                    user: user,
                    message: 'user created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err)
        )
})

module.exports = router;