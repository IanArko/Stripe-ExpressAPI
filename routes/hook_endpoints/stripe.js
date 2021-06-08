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

router.post("/", (req, res) => {
  const event = req.body;

  // Handle the events
  switch (event.type) {
    case "issuing_authorization.created":
      console.log(`Authorization was successfully updated!`);
      // TODO: Handle event somehow
      break;

    case "issuing_authorization.updated":
      console.log(`Updated a purchase authorization!`);
      // TODO: Handle event somehow
      break;

    case "issuing_cardholder.created":
      console.log(`Cardholder added.`);
      // TODO: Handle event somehow
      break;

    case "issuing_cardholder.updated":
      console.log(`Cardholder updated.`);
      // TODO: Handle event somehow
      break;

    case "issuing_transaction.created":
      console.log(`Transaction added.`);
      // TODO: Handle event somehow
      break;

    case "issuing_transaction.updated":
      console.log(`Transaction updated.`);
      // TODO: Handle event somehow
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
