require('dotenv').config();
const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST
router.post('/signup', (req, res) => {
    User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            avatar: req.body.avatar
        })
        .then(createSuccess = (user) => {
                let token = jwt.sign({
                        id: user.id
                    },
                    process.env.JWT_SECRET, {
                        expiresIn: 60 * 60 * 24
                    });
                res.json({
                    user: user,
                    message: 'user created',
                    sessionToken: token
                });
            },
            createError = err => res.send(500, err)
        );
});

router.post('/login', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({
                            id: user.id
                        }, process.env.JWT_SECRET, {
                            expiresIn: 60 * 60 * 24
                        });
                        res.json({
                            user: user,
                            message: 'login success',
                            sessionToken: token
                        });
                    } else {
                        res.status(502).send({
                            error: 'bad gateway'
                        });
                    };
                });
            } else {
                res.status(500).send({
                    error: "failed to authenticate"
                });
            };
        }, err => status(501).send({
            error: 'failed to process',
            err
        }));
});

// UPDATE

module.exports = router;