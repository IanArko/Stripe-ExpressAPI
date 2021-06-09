/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary cards endpoint extending stripe cards api
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
 * desc    : Retrieves a card's details.
 * path    : ./api/card/:cardID
 */
router.get("/:cardID", async (req, res) => {
  try {
    const cardID = req.params.cardID;
    const card = await stripe.issuing.cards.retrieve(cardID);
    res.status(200).send(card);
  } catch (err) {
    // Forward Errors to the Client
    res.send(err);
  }
});

/**
 * Method  : POST
 * desc    : Updates a card's details.
 * path    : ./api/card/:cardID
 */
 router.post("/:cardID", async (req, res) => {
  try {
    // const cardID = req.params.cardID;
    // TODO: Handle optional parameters
    // const card = await stripe.issuing.cards.update(
    //   cardID,
    //   {metadata: {order_id: '6735'}}
    // );
    res.status(501).send("We currently do not support updating a card.");
  } catch (err) {
    // Forward Errors to the Client
    res.send(err);
  }
});

// Send 501 status for currently unsupported requests
router.get('*', function (req, res) {
  res.sendStatus(501);
})

// Export router
module.exports = router;
