module.exports = (sequelize, DataTypes) => {
    const PlaceOfLiving = sequelize.define('placeOfLiving', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        isHouse: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false
        },
    });
    return PlaceOfLiving;
}