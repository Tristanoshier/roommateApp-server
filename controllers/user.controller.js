require('dotenv').config();
const router = require('express').Router();
const User = require('../db').import('../models/user');

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
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;