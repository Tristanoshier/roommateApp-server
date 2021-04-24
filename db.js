const Sequelize = require('sequelize');

// db connection and authentication
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('database is connected'))
    .catch((err => console.log(err)));

// model imports
User = sequelize.import('./models/user');
PlaceOfLiving = sequelize.import('./models/placeOfLiving');
StoreItem = sequelize.import('./models/storeItem');
Chore = sequelize.import('./models/chore');

// db table associations 


// do research on many to many relationships
User.hasOne(PlaceOfLiving)
PlaceOfLiving.belongsToMany(User);

PlaceOfLiving.hasMany(StoreItem);
StoreItem.belongsTo(PlaceOfLiving);

PlaceOfLiving.hasMany(Chore);
Chore.belongsTo(PlaceOfLiving);

User.hasMany(StoreItem);
StoreItem.belongsTo(User);

User.hasMany(Chore);
Chore.belongsTo(User);
module.exports = sequelize;

