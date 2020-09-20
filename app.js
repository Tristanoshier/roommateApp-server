require('dotenv').config();

// express
const express = require('express');
const app = express();

// controller imports
const placeOfLiving = require("./controllers/placeOfLiving.controller");
const user = require("./controllers/user.controller");

// db import and sync
const sequelize = require('./db');
sequelize.sync();
// sequelize.sync({ force: true });
app.use(express.json());

// middleware
app.use(require('./middleware/headers'));

// routes
app.use('/placeOfLiving', placeOfLiving);
app.use(require('./middleware/validate-session'));
app.use('/user', user);




app.listen(process.env.PORT, () => console.log('app is listening on port 3001'));




