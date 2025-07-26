const express = require('express');
const router = express.Router();
const BookingController = require('../Controllers/BookingController');


router.post('/add-booking-data', BookingController.addBookingData);

router.get('/get-all-booking-data', BookingController.getAllBookingData);

router.get('/get-booking-data-by-key', BookingController.getBookingDataByKey);

router.get('/get-booking-data-by-month', BookingController.getBookingDataByMonth);

router.post('/update-booking-data-status', BookingController.updateBookingStatus);

router.post('/update-user-booking-data', BookingController.updateUserBookingData);

module.exports = router;