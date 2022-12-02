const {Sequelize, DataTypes} = require('sequelize')
const db = require('./db');

const registration = db.sequelize.define('registration',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      
    },
    full_name:{
        type:DataTypes.STRING(50),
        allowNull:false,
        
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true,
    },
    username:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true,

    },
    password:{
        type:DataTypes.STRING(50),
        allowNull:false,

    },
    confirm_password:{
        type:DataTypes.STRING(50),
        allowNull:false,

    },
    role:{
        type:DataTypes.STRING(50),
        allowNull:false,

    },
});


module.exports = registration;