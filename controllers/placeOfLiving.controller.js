require('dotenv').config();
const router = require("express").Router();
const PlaceOfLiving = require('../db').import('../models/placeOfLiving');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// POST
router.post('/signup', (req, res) => {
    PlaceOfLiving.create({
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 10),
        isHouse: req.body.isHouse
    })
        .then(
            createSuccess = (placeOfLiving) => {
                let token = jwt.sign({
                    id: placeOfLiving.id
                }, process.env.JWT_SECRET, {
                    expiresIn: 60 * 60 * 24
                })
                res.json({
                    placeOfLiving: placeOfLiving,
                    message: 'place of living created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err)
        )
});

router.post('/login', (req, res) => {
    PlaceOfLiving.findOne({
            where: {
                name: req.body.name
            }
        })
        .then(placeOfLiving => {
            if (placeOfLiving) {
                bcrypt.compare(req.body.password, placeOfLiving.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({
                            id: placeOfLiving.id
                        }, process.env.JWT_SECRET, {
                            expiresIn: 60 * 60 * 24
                        })
                        res.json({
                            placeOfLiving: placeOfLiving,
                            message: 'login success',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({
                            error: 'bad gateway'
                        })
                    }
                })
            } else {
                res.status(500).send({
                    error: "failed to authenticate"
                })
            }
        }, err => status(501).send({
            error: 'failed to process'
        }))
});

// UPDATE

module.exports = router;


