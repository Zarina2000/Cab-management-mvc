const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize("cab", "root", "Experion@123", {
    host: "localhost",
    dialect: "mysql"
});

module.exports.sequelize = sequelize;