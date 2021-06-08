const express = require('express');
var router = express.Router();
const STRIPE_KEY =
  process.env.TEST_MODE == 1
    ? process.env.STRIPE_TEST_SECRET_KEY
    : process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(STRIPE_KEY);

router.post('/', async (req, res) => {
  const event = req.body;
  console.log(event);
  res.send("DID A THING")
});

// Export router
module.exports = router;