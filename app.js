require('dotenv').config();

// express
const express = require('express');
const app = express();

// controller imports
const user = require('./controllers/user.controller');
const placeOfLiving = require('./controllers/placeOfLiving.controller');
const storeItem = require('./controllers/storeItem.controller');
const chore = require('./controllers/chore.controller');

// db import and sync
const sequelize = require('./db');
sequelize.sync();
// sequelize.sync({ force: true }); 
app.use(express.json());

// middleware
app.use(require('./middleware/headers'));

// routes
app.use('/user', user);
app.use(require('./middleware/validate-session'));
app.use('/placeofliving', placeOfLiving);
app.use('/chore', chore);
app.use('/storeitem', storeItem);

app.listen(process.env.PORT, () => console.log('app is listening on port 3001'));