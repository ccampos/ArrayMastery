// === Exercise 1: Filter Even Numbers ===
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Create a new array of even numbers
const evens = numbers.filter(number => number % 2 === 0);

console.log('Even Numbers:', evens);


// === Exercise 2: Filter Active Users ===
const users = [
  { id: 1, name: 'Sam', active: true },
  { id: 2, name: 'Alex', active: false },
  { id: 3, name: 'Charlie', active: true }
];

// TODO: Create a new array with only active users
const activeUsers = users.filter(user => user.active);

console.log('Active Users:', activeUsers);


// === Exercise 3: Filter Words Longer Than 5 Characters ===
const words = ['hi', 'filter', 'JavaScript', 'cat', 'banana'];

// TODO: Create a new array with words longer than 5 characters
const longWords = words.filter(word => word.length > 5);

console.log('Long Words:', longWords);
