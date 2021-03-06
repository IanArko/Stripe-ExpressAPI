// Handle a IssuingAuthorizationCreated event
function IssuingAuthorizationCreated(event) {
  console.log(`Authorization was successfully created!`);
  // TODO: Use hooks to approve or decline an authorization
  // POST 
  // /v1/issuing/authorizations/:id/approve
  //   POST 
  // /v1/issuing/authorizations/:id/decline
}

function IssuingAuthorizationUpdated(event) {
  console.log(`Authorization was successfully updated!`);
}

function IssuingCardholderCreated(event) {
  console.log(`Cardholder was successfully created!`);
  // TODO: Update a user account with the stripe cardholder id
}

function IssuingCardholderUpdated(event) {
  console.log(`Cardholder was successfully updated!`);
}

function IssuingTransactionCreated(event) {
  console.log(`Transaction was successfully created!`);
}

function IssuingTransactionUpdated(event) {
  console.log(`Transaction was successfully updated!`);
}

module.exports = {
  IssuingAuthorizationCreated: IssuingAuthorizationCreated,
  IssuingAuthorizationUpdated: IssuingAuthorizationUpdated,
  IssuingCardholderCreated: IssuingCardholderCreated,
  IssuingCardholderUpdated: IssuingCardholderUpdated,
  IssuingTransactionCreated: IssuingTransactionCreated,
  IssuingTransactionUpdated: IssuingTransactionUpdated,
};
