module.exports = (sequelize, DataTypes) => {
    const StoreItem = sequelize.define('storeItem', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            unique: false
        },
        recommendedPlaceToBuy: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        }
    });
    return StoreItem;
}