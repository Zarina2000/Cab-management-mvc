const Customer = require('./registration')
const booking = require('./booking')
const price = require('./price')


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
price.sync({alter: true});