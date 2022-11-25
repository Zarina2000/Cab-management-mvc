const Customer = require('./registration')
const booking = require('./booking')
Customer.sync({alter: true});
booking.sync({alter: true});