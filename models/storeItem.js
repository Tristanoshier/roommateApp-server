module.exports = (sequelize, DataTypes) => {
    const StoreItem = sequelize.define('storeItem', {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        recommendedPlaceToBuy: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        }
    });
    return StoreItem;
};