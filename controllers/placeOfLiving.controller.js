require('dotenv').config();
const router = require("express").Router();;
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

// UPDATE

module.exports = router;


