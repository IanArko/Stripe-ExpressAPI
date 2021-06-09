/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary Define the stripe resource's endpoints
 * @author Ian Arko <ianrichardarko@gmail.com>
 *
 * Created at : 2021-06-09 15:02:00
 */


// Import and setup file
var express = require('express');
var router = express.Router();

// Setup stipe endpoints
var cardRouter = require('./stripe_endpoints/cards');
var transactionRouter = require('./stripe_endpoints/transactions');
var authorizationRouter = require('./stripe_endpoints/authorizations');
var cardholderRouter = require('./stripe_endpoints/cardholders');

// Route to the proper endpoints
router.use('/cards', cardRouter);
router.use('/transactions', transactionRouter);
router.use('/authorizations', authorizationRouter);
router.use('/cardholders', cardholderRouter);

module.exports = router;

