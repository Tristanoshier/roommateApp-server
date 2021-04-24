module.exports = (sequelize, DataTypes) => {
    const PlaceOfLiving = sequelize.define('placeOfLiving', {
        displayName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        placeUsername: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false        
        },
        isHouse: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false
        },
    });
    return PlaceOfLiving;
};