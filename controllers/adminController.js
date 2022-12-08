const ride = require('../models/booking');
const price = require('../models/price');

module.exports.getRequest = (req, res, next) => {
    //console.log("Hii");
    ride.findAll().then(ridedata => {
        console.log( JSON.parse(JSON.stringify(ridedata)));
        res.render('adminBookinglist', {
            data: ridedata,
            //identity: req.identity.user
        });
        
    })
}

module.exports.locationDetails = (req, res, next) => {
    res.render('addLocation');
}

module.exports.addLocation = (req, res, next)=>{
    price.create({
        pickup_point:req.body.pickup,
        destination:req.body.destination,
        price:req.body.amount
    })
    .then((user)=>{
        res.redirect("/adminHome");
       
    })
    }