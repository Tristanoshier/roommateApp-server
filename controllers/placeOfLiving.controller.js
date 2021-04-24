require('dotenv').config();
const bcrypt = require('bcryptjs');;
const router = require('express').Router();
const PlaceOfLiving = require('../db').import('../models/placeOfLiving');

// POST
router.post('/create', (req, res) => {
    const placeOfLiving = {
        displayName: req.body.displayName,
        placeUsername: req.body.placeUsername,
        password: bcrypt.hashSync(req.body.password, 10),
        address: req.body.address,
        isHouse: req.body.isHouse
    };
    PlaceOfLiving.create(placeOfLiving)
        .then(placeOfLiving => res.status(200).json(placeOfLiving))
        .catch(err => res.status(500).json({
            error: err
        }));
});

router.post('/join', (req, res) => {
    PlaceOfLiving.findOne({
        where: {
            placeUsername: req.body.placeUsername
        }
    })
    .then(place => {
        if (place) {
            bcrypt.compare(req.body.password, place.password, (err, matches) => {
                if (matches) {
                    res.status(200).json({
                        place: place,
                        message: 'house added',
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
})

// GET
router.get('/find', (req, res) => {
    PlaceOfLiving.findOne({
            where: {
                id: req.placeOfLiving.id
            },
            include: ['placeOfLivings']
        })
        .then(placeOfLiving => res.status(200).json(placeOfLiving))
        .catch(err => res.status(500).json({
            error: err
        }));
});

// UPDATE
router.put('/update/:id', (req, res) => {
    PlaceOfLiving.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(placeOfLiving => res.status(200).json(placeOfLiving))
        .catch(() => res.json(req.errors))
});

// DELETE
router.delete('/delete/:id', (req, res) => {
    PlaceOfLiving.destroy({
            where: {
                id: req.params.id
            }
        }).then(placeOfLiving => res.status(200).json(placeOfLiving))
        .catch(err => res.json({
            error: err
        }));
});

module.exports = router;