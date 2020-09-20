require('dotenv').config();

// express
const express = require('express');
const app = express();

// controller imports



// db import and sync
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());

// middleware



app.listen(3000, () => console.log('app is listening on port 3000'));




