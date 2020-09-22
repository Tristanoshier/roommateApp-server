require('dotenv').config();
const router = require('express').Router();
const StoreItem = require('../db').import('../models/storeItem');

// POST
router.post('/create', (req, res) => {
    const storeItem = {
        name: req.body.name,
        isActive: req.body.isActive,
        price: req.body.price,
        recommendedPlaceToBuy: req.body.recommendedPlaceToBuy,
        placeOfLivingId: req.placeOfLiving.id
    }
    StoreItem.create(storeItem)
        .then(storeItemInfo => res.status(200).json(storeItemInfo))
        .catch(err => res.status(500).json({ error: err }))
});

// GET
router.get('/find', (req, res) => {
    PlaceOfLiving.findOne({
        where: {
            id: req.placeOfLiving.id
        },
        include: ['storeItem']
    })
        .then(chore => res.status(200).json(storeItem))
        .catch(err => res.status(500).json({
            error: err
        }))
});

module.exports = router;