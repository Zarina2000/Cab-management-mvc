const ride = require('../models/booking');
module.exports.getRequest = (req, res, next) => {
    //console.log("Hii");
    ride.findAll().then(ridedata => {
        console.log(ridedata);
       
        res.render('driverHome', {
            data: ridedata,
            //identity: req.identity.user
        });
        
    })
}
