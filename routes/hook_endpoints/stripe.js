/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary Parse body of Stripe hooks and handle information streams
 * @author Ian Arko <ianrichardarko@gmail.com>
 *
 * Created at     : 2021-06-08 10:16:00
 */

const express = require("express");
var router = express.Router();
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var handler = require('./../../library/hooks_stripe');

router.post("/", (req, res) => {
  const event = req.body;

  // Handle the events
  switch (event.type) {
    case "issuing_authorization.created":
      handler.IssuingAuthorizationCreated(event);
      break;

    case "issuing_authorization.updated":
      handler.IssuingAuthorizationUpdated(event);
      break;

    case "issuing_cardholder.created":
      handler.IssuingCardholderCreated(event);
      break;

    case "issuing_cardholder.updated":
      handler.IssuingCardholderUpdated(event);
      break;

    case "issuing_transaction.created":
      handler.IssuingTransactionCreated(event);
      break;

    case "issuing_transaction.updated":
      handler.IssuingTransactionUpdated(event);
      break;

    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
  // Return a 200 response to acknowledge receipt of the event
  res.send();
});

// Export router
module.exports = router;
