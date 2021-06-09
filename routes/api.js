// Import and setup file
var express = require('express');
var router = express.Router();

// Setup resource routers
var stripeRouter = require('./api_resources/stripe');

// Route to the proper resources
router.use('/stripe', stripeRouter);

module.exports = router;

