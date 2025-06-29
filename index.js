// Write your so// Declare in global scope using var
var customerName = 'bob';

// Uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope from inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // DO NOT use var/let/const
}

// Overwrite the global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Try to change the constant (this will throw an error if called)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}

// Export for Jest
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};
