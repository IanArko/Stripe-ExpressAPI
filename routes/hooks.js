// Import and setup file
var express = require('express');
var router = express.Router();

// Setup resource routers
var stripeRouter = require('./hook_endpoints/stripe');

// Route to the proper resource endpoints
router.use('/stripe', stripeRouter);

module.exports = router;

