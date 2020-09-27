const Sequelize = require('sequelize');

// db connection and authentication
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('database is connected'))
    .catch((err => console.log(err)));

// model imports
PlaceOfLiving = sequelize.import('./models/placeOfLiving');
User = sequelize.import('./models/user');
StoreItem = sequelize.import('./models/storeItem');
Chore = sequelize.import('./models/chore');

// db table associations 
PlaceOfLiving.hasMany(User);
User.belongsTo(PlaceOfLiving);

PlaceOfLiving.hasMany(Chore);
Chore.belongsTo(PlaceOfLiving);

PlaceOfLiving.hasMany(StoreItem);
StoreItem.belongsTo(PlaceOfLiving);


module.exports = sequelize;

