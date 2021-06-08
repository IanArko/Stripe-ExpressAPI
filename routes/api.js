// Import and setup file
var express = require('express');
var router = express.Router();

// Setup resource routers
var cardRouter = require('./api_endpoints/card');
var transactionRouter = require('./api_endpoints/transaction');
var authorizationRouter = require('./api_endpoints/authorization');
var cardholderRouter = require('./api_endpoints/cardholder');

// Route to the proper resource endpoints
router.use('/card', cardRouter);
router.use('/transaction', transactionRouter);
router.use('/authorization', authorizationRouter);
router.use('/cardholder', cardholderRouter);

module.exports = router;

