/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary cardholders endpoint extending stripe cardholders api
 * @author Ian Arko <ianrichardarko@gmail.com>
 *
 * Created at : 2021-06-08 09:55:00
 */

// Configure Imports
var express = require("express");
var router = express.Router();
const STRIPE_KEY =
  process.env.TEST_MODE == 1
    ? process.env.STRIPE_TEST_SECRET_KEY
    : process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(STRIPE_KEY);

/**
 * Method  : GET
 * path    : ./api/stripe/cardholders/:cardholderID
 */
router.get("/:cardholderID", async (req, res) =>  {
  try {
    const cardholderID = req.params.cardholderID
    const cardholder = await stripe.issuing.cardholders.retrieve(
      cardholderID
    );
    res.send(cardholder);
  } catch (err) { // Forward Errors to the Client
    res.send(err);
  }
});

/* -------------------- TODO --------------------
 *  Update a cardholder   : POST /cardholders/:id
 *  Create a cardholder   : POST /cardholders/
 *  List cardholders      : GET /cardholders/
 */

// Send 501 status for currently unsupported requests
router.get('*', function (req, res) {
  res.sendStatus(501);
})

// Export router
module.exports = router;
