// === Exercise 1: Capitalize Names ===
const names = ['alice', 'bOB', 'ChARLie'];

const capitalizedNames = names.map((name) => {
  let lowercase = name.toLowerCase();
  let capitalized = lowercase[0].toUpperCase() + lowercase.slice(1);
  return capitalized;
});

console.log('Capitalized Names:', capitalizedNames);


// === Exercise 2: Convert Prices from USD to EUR ===
const usdPrices = [10, 15.5, 20];
const exchangeRate = 0.91;

const eurPrices = usdPrices.map(price => {
  // TODO: Convert to EUR and round to 2 decimal places
  return parseFloat((price * exchangeRate).toFixed(2));
});

console.log('EUR Prices:', eurPrices);


// === Exercise 3: Extract User Emails ===
const users = [
  { id: 1, name: 'Sam', email: 'sam@example.com' },
  { id: 2, name: 'Alex', email: 'alex@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

const emails = users.map(user => {
  // TODO: Extract the email field
  return user.email;
});

console.log('User Emails:', emails);
