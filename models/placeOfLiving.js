module.exports = (sequelize, DataTypes) => {
    const PlaceOfLiving = sequelize.define('placeOfLiving', {
        isHouse: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false
        },
        numOfPeople: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        }
    });
    return PlaceOfLiving;
}