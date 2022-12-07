const profile = require('../models/registration');
module.exports.getProfile = (req, res, next) => {
    profile.findOne(
        { where: 
            { id:req.session.userId}
        })
            .then(ridedata => {
        console.log(ridedata);
       
        res.render('profile', {
            data: ridedata,
        });
        
    })
}
