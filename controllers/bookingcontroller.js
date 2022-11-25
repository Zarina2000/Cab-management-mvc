const user = require('../models/booking');
const { body, validationResult } = require('express-validator');

// module.exports.booking = (req, res, next)=>{
//     res.render('booking');
// }

module.exports.book = (req, res, next) => {
    res.render('prebooking');
}

module.exports.getHome = (req, res, next) => {
    res.render('index');
}


module.exports.scheduleBooking = (req, res, next)=>{
user.create({
    pickup_point:req.body.pickup,
    destination:req.body.destination,
    date:req.body.date,
    time:req.body.time,
    pasengerNumber:req.body.passenger_num
})
.then((user)=>{
    res.redirect("/index");
   
})
}