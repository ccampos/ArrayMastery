// === Exercise 1: Sum All Numbers ===
const numbers = [5, 10, 15, 20];

// TODO: Use reduce to calculate the total sum
const total = numbers.reduce(
  (accumulator, number) => {
    return accumulator + number;
  },
  0
);

console.log('Total Sum:', total);


// === Exercise 2: Count Number of True Values ===
const flags = [true, false, true, true, false, false, true];

// TODO: Use reduce to count how many are true
const trueCount = flags.reduce(
  (accumulator, flag) => {
    return flag ? accumulator + 1 : accumulator;
  },
  0
);

console.log('Number of Trues:', trueCount);


// === Exercise 3: Flatten a 2D Array ===
const grid = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// TODO: Use reduce to flatten this into a 1D array: [1, 2, 3, 4, 5, 6]
const flattened = grid.reduce(
  (accumulator, array) => {
    return accumulator.concat(array);
  },
  []
);

console.log('Flattened Array:', flattened);

// === Exercise 4: Count Word Frequencies ===
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// TODO: Use reduce to build an object like { apple: 3, banana: 2, orange: 1 }
const wordFrequencies = words.reduce(
  (accumulator, word) => {
    if (!accumulator[word]) {
      accumulator[word] = 0;
    }

    accumulator[word]++;

    return accumulator;
  },
  {}
);

console.log('Word Frequencies:', wordFrequencies);


// === Exercise 5: Find Maximum Number ===
const numbers2 = [42, 8, 99, 23, 105, 67];

// TODO: Use reduce to find the largest number
const maxNumber = numbers2.reduce(
  (accumulator, number) => {
    if (accumulator < number) {
      return number;
    }
    return accumulator;
  },
  0
);

console.log('Max Number:', maxNumber);


// === Exercise 6: Group People by Age Group ===
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 32 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 45 }
];

// TODO: Use reduce to group into { adults: [...], minors: [...] }
// Age 18 and up is an adult
const ageGroups = people.reduce(
  (accumulator, person) => {
    let group = person.age < 18 ? 'minors' : 'adults';

    if (!accumulator[group]) accumulator[group] = [];

    accumulator[group].push(person);

    return accumulator;
  },
  {}
);

console.log('Age Groups:', ageGroups);

// === Exercise 7: Calculate Total Price of Items ===
const cart = [
  { name: 'Book', price: 12.99 },
  { name: 'Pen', price: 1.99 },
  { name: 'Notebook', price: 5.49 },
  { name: 'Backpack', price: 34.99 }
];

// TODO: Use reduce to calculate total cart value
const totalPrice = cart.reduce(
  (accumulator, product) => {
    return accumulator + product.price;
  },
  0
);

console.log('Total Price:', totalPrice);


// === Exercise 8: Find the Longest Word ===
const wordList = ['tree', 'encyclopedia', 'sun', 'pneumonoultramicroscopicsilicovolcanoconiosis', 'bird'];

// TODO: Use reduce to find the longest word
const longestWord = wordList.reduce(
  (accumulator, word) => {
    if (accumulator.length < word.length) {
      return word;
    } else {
      return accumulator;
    }
  },
  ''
);

console.log('Longest Word:', longestWord);


// === Exercise 9: Tally Votes ===
const votes = ['yes', 'no', 'yes', 'yes', 'no', 'no', 'yes'];

// TODO: Use reduce to build an object like { yes: 4, no: 3 }
const voteTally = votes.reduce(
  (accumulator, vote) => {
    if (!accumulator[vote]) accumulator[vote] = 0;
    accumulator[vote]++;
    return accumulator;
  },
  {}
);

console.log('Vote Tally:', voteTally);
