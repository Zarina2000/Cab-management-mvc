const price = require('../models/price');

module.exports.paymentDetails = (req, res, next) => {
    res.render('payment');
}
module.exports.invoiceDetails = (req, res, next) => {
    res.render('invoice');
}


module.exports.invoice = (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    price.findByPk(id)
        .then(amount => {
            console.log("..........", amount)
            res.render('invoice', {
                price:amount.price,

                location_id:amount.location_id,

                pickup_point : amount.pickup_point,

                destination:amount.destination,
                user: req.identity.user
                
            })

        });
}

