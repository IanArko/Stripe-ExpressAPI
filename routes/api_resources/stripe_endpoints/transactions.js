/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary transaction endpoint extending stripe transaction api
 * @author Ian Arko <ianrichardarko@gmail.com>
 *
 * Created at : 2021-06-08 09:55:00
 */

// Configure Imports
const { response } = require("express");
var express = require("express");
var router = express.Router();
const STRIPE_KEY =
  process.env.TEST_MODE == 1
    ? process.env.STRIPE_TEST_SECRET_KEY
    : process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(STRIPE_KEY);
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * Method  : GET
 * desc    : Get the limit # of transactions from card with cardID. Supports pagination.
 * path    : ./api/stripe/transactions/:cardID
 */
router.get("/:cardID", async (req, res) => {
  try {
    // Parse the parameters
    const cardID = req.params.cardID;
    let limit = !req.query.limit ? 25 : req.query.limit;
    let starting_after = req.query.starting_after;

    // Constraints of the stripe API
    if (limit > 100 || limit < 0) {
      res.status(400);
      res.send("Limit invalid. Please send a limit between 0 and 100 inclusive");
    } else {
      let transactions;
      if (starting_after != null) {
        transactions = await stripe.issuing.transactions.list({
          starting_after: starting_after,
          limit: limit,
          card: cardID,
        });
      } else {
        transactions = await stripe.issuing.transactions.list({
          limit: limit,
          card: cardID,
        });
      }
      res.send(transactions);
    }
  } catch (err) {
    // Forward Errors to the Client
    res.status(500);
    res.send("An error occured ==> " + err);
  }
});

// Send 501 status for currently unsupported requests
router.get("*", function (req, res) {
  res.sendStatus(501);
});

// Export router
module.exports = router;
