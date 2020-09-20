require('dotenv').config();
const router = require('express').Router();
const User = require('../db').import('../models/user');

// POST
router.post('/signup', (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        avatar: req.body.avatar,
        placeOfLivingId: req.placeOfLiving.id
    }
    User.create(user)
    .then(userInfo => res.status(200).json(userInfo))
    .catch(err => res.status(500).json({ error: err}))  
});

// GET
router.get('/find', (req, res) => {
    PlaceOfLiving.findOne({
            where: {
                id: req.placeOfLiving.id
            },
            include: ['users']
        })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({
            error: err
        }))
});

module.exports = router;