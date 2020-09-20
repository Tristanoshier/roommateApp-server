module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://i.stack.imgur.com/l60Hf.png",
            unique: false
        }
    });
    return User;
}