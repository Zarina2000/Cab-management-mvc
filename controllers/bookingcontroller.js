const user = require('../models/booking');
const price = require('../models/price');
const { body, validationResult } = require('express-validator');

// module.exports.booking = (req, res, next)=>{
//     res.render('booking');
// }

module.exports.book = (req, res, next) => {
    res.render('prebooking');
}

// module.exports.getHome = (req, res, next) => {
//     res.render('index');
// }


module.exports.scheduleBooking = (req, res, next)=>{
user.create({
    pickup_point:req.body.pickup,
    destination:req.body.destination,
    date:req.body.date,
    time:req.body.time,
    pasengerNumber:req.body.passenger_num,
    user_id:req.identity.user.id
    
})
.then((user)=>{
    const pickupPoint=req.body.pickup;

    const destination=req.body.destination;

    console.log(pickupPoint)

    price.findOne({

        where: {pickup_point:pickupPoint,destination:destination}

    })

    .then(amount=>{

        console.log(amount.price)
       
            res.render("payment",{

                price:amount.price,

                location_id:amount.location_id,

                pickup_point : amount.pickup_point,

                destination:amount.destination

            })

           

        })
   // res.redirect("/payment");
   
});
// .then(err=>{
//     console.log(err);
// })
}