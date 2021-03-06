const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotController');
const dashboardController = require('./controllers/DashboardController');
const bookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', sessionController.store);

//SPOT ROUTES
routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail'),spotController.store);

//DASHBOARD ROUTE
routes.get('/dashboard', dashboardController.show);

//BOOKING ROUTE
routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;