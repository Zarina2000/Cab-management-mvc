const ride = require('../models/booking');

// module.exports.myRide = (req, res, next)=>{
//     res.render('myride');
// }
module.exports.getMyride = (req, res, next) => {
    ride.findAll().then(ridedata => {
        res.render('myride', {
            data: ridedata,
            //identity: req.identity.user
        });
    })
}

module.exports.update = async(req, res, next) => {
    ride.findByPk(req.params.booking_id)
        .then(bookingFromDb => {
            res.render('updateMyride', {
                data: bookingFromDb
            });
        });
}

module.exports.updatePost = async (req, res, next) => {
    // var movie = await movie.findByPk(req.params.id);
    await ride.update(
        {
            pickup_point: req.body.pickup_point,
            destination: req.body.destination,
            date: req.body.date,
            time: req.body.time,
            pasengerNumber: req.body.pasengerNumber
        },
        {
            where: {booking_id: req.params.booking_id}
        }
    )
    res.redirect('/myride');
}

module.exports.delete = async (req, res, next) => {
    let booking_id = req.params.booking_id;
    let movieFromDb = await ride.findByPk(booking_id);
    if (movieFromDb != null) {
        await ride.destroy({
            where: {
                booking_id: booking_id
            }
        });
        res.redirect("/myride");
    }
}