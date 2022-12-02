const Customer = require('./registration')
const booking = require('./booking')



Customer.hasOne(booking);
booking.belongsTo(Customer,{
    foreignKey:{
        name:'user_id',
        field:'user_id',
        allowNull:false
    }
});
Customer.sync({alter: true});
booking.sync({alter: true});