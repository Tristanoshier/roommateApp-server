require('dotenv').config();
const router = require('express').Router();
const placeOfLiving = require("../db").import("../models/placeOfLiving");

router.post("/signup", (req, res) => {
    const place = {
        isHouse: req.body.isHouse,
        numOfPeople: req.body.numOfPeople
    }
    PlaceOfLiving.create(place)
        .then(
            placeOfLivingInfo => res.status(200).json(placeOfLivingInfo)
        )
        .catch(err => res.json({
            error: err
        }))
})

router.get("/find", (req, res) => {
    placeOfLiving.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(
            placeOfLivingInfo => res.status(200).json(placeOfLivingInfo)
        )
        .catch(err => res.status(500).json({
            error: err
        }))
})

module.exports = router;