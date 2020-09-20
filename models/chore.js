module.exports = (sequelize, DataTypes) => {
    const Chore = sequelize.define('chore', {
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
        frequency: {
            type: DataTypes.DATE,
            allowNull: true,
            unique: false
        }
    });
    return Chore;
}