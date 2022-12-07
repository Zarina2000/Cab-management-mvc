const ride = require('../models/booking');
module.exports.getRequest = (req, res, next) => {
    //console.log("Hii");
    ride.findAll().then(ridedata => {
       

        
        console.log( JSON.parse(JSON.stringify(ridedata)));
       
        res.render('adminBookinglist', {
            data: JSON.parse(JSON.stringify(ridedata)),
            //identity: req.identity.user
        });
        
    })
}