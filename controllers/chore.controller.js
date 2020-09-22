// POST
router.post('/create', (req, res) => {
    const chore = {
        name: req.body.name,
        isActive: req.body.isActive,
        frequency: req.body.frequency,
        placeOfLivingId: req.placeOfLiving.id
    }
    Chore.create(chore)
    .then(choreInfo => res.status(200).json(choreInfo))
    .catch(err => res.status(500).json({ error: err}))  
});

// GET
router.get('/find', (req, res) => {
    PlaceOfLiving.findOne({
            where: {
                id: req.placeOfLiving.id
            },
            include: ['chores']
        })
        .then(chore => res.status(200).json(chore))
        .catch(err => res.status(500).json({
            error: err
        }))
});