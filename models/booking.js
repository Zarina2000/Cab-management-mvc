const {Sequelize, DataTypes} = require('sequelize')
const db = require('./db');

const booking = db.sequelize.define('booking',{
    booking_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      
    },
    // user_id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
      
    // },
    pickup_point:{
        type:DataTypes.STRING(50),
        allowNull:false,
        
    },
    destination:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    date:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    time:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    pasengerNumber:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
   
});


module.exports = booking;