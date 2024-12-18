const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the User model
const User = sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_no: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},  {
    tableName: 'users', 
    timestamps: false 
});


module.exports = User;
