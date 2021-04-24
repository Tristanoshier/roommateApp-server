require('dotenv').config();
const router = require('express').Router();
const PlaceOfLiving = require('../db').import('../models/placeOfLiving');
const Chore = require('../db').import('../models/chore');

// POST
router.post('/create:polids', (req, res) => {
    const chore = {
        name: req.body.name,
        isActive: req.body.isActive,
        frequency: req.body.frequency,
        placeOfLivingId: req.params.polid,
        userId: req.body.userId
    };
    Chore.create(chore)
        .then(choreInfo => res.status(200).json(choreInfo))
        .catch(err => res.status(500).json({ error: err }));
});

// GET
router.get('/find:polid', (req, res) => {
    PlaceOfLiving.findOne({
        where: {
            id: req.params.polid
        },
        include: ['chores']
    })
        .then(chore => res.status(200).json(chore))
        .catch(err => res.status(500).json({ error: err }));
});

// UPDATE
router.put('/update/:id', (req, res) => {
    Chore.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(chore => res.status(200).json(chore))
        .catch(() => res.json(req.errors))
});

// DELETE
router.delete('/delete/:id', (req, res) => {
    Chore.destroy({
            where: {
                id: req.params.id
            }
        }).then(chore => res.status(200).json(chore))
        .catch(err => res.json({
            error: err
        }));
});

module.exports = router;