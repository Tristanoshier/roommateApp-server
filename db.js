const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('database is connected'))
    .catch((err => console.log(err)));

PlaceOfLiving = sequelize.import('./models/placeOfLiving');
User = sequelize.import('./models/user');
StoreItem = sequelize.import('./models/storeItem');
Chore = sequelize.import('./models/chore');

User.belongsTo(PlaceOfLiving);
PlaceOfLiving.hasMany(User);

Chore.belongsTo(User);
User.hasMany(Chore);

StoreItem.belongsTo(User);
User.hasMany(StoreItem);


module.exports = sequelize;

