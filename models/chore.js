module.exports = (sequelize, DataTypes) => {
    const Chore = sequelize.define('chore', {
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
        frequency: {
            type: DataTypes.INTEGER, // need to figure out how user should enter time
            allowNull: true,
            unique: false
        }
    });
    return Chore;
}