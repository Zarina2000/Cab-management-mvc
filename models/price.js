const {Sequelize, DataTypes} = require('sequelize')
const db = require('./db');

const price = db.sequelize.define('price',{
    location_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      
    },
    pickup_point:{
        type:DataTypes.STRING(50),
        allowNull:false,
        
    },
    destination:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
    
   
});


module.exports = price;