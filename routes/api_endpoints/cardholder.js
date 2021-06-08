/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary cardholder endpoint supporting GET
 * @author Ian Arko <ianrichardarko@gmail.com>
 *
 * Created at     : 2021-06-08 09:55:00
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
 * path    : ./api/cardholder/:cardholderID
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

// Send 405 status for unsuppooted HTTP Request types
router.post("/", async (req, res) => {
  res.sendStatus(405);
});

router.delete("/", async (req, res) => {
  res.sendStatus(405);
});

router.put("/", async (req, res) => {
  res.sendStatus(405);
});

// Export router
module.exports = router;
