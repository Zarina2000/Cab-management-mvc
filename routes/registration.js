const express = require('express');
const cc = require('../controllers/registerController');
const controller = require('../controllers/bookingController');
const ridecontroller = require('../controllers/myrideController');
const requestcontroller = require('../controllers/driverController');
const profilecontroller = require('../controllers/profileController');
const paymentcontroller = require('../controllers/paymentController');
const admincontroller = require('../controllers/adminController');
const router = express.Router()
router.get('/', cc.getIndex);


router.get('/registration', cc.getAll);
router.get('/booking', cc.booking);
router.post('/booking', cc.getprebook);
router.post('/registration', cc.addOne);
router.get('/login', cc.login);
router.get('/', cc.getIndex);
router.get('/index', cc.getIndex);
router.post('/login', cc.loginPost);

router.get('/adminHome', cc.adminHome);



router.get('/prebooking', controller.book);
router.post('/prebooking', controller.scheduleBooking);
// router.get('/index', controller.getHome);

//router.get('/myride', ridecontroller.myRide);
router.get('/myride', ridecontroller.getMyride);
router.get('/update/:booking_id', ridecontroller.update);
router.post('/update/:booking_id', ridecontroller.updatePost);
router.get('/delete/:booking_id', ridecontroller.delete);

router.get('/request', requestcontroller.getRequest);

router.get('/bookinglist', admincontroller.getRequest);
router.get('/locationDetails', admincontroller.locationDetails);
router.post('/locationDetails', admincontroller.addLocation);

router.get('/profile', profilecontroller.getProfile);

router.get('/payment', paymentcontroller.paymentDetails);

router.get('/invoice/:id', paymentcontroller.invoice);

router.get('/logout', cc.logout);





module.exports = router;