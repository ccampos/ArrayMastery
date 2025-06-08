// === Exercise 1: Get the first two elements ===
const animals = ['cat', 'dog', 'rabbit', 'hamster'];
console.log('Original:', animals);

// TODO: Use slice to get the first two animals
const firstTwo = animals.slice(0, 2);

console.log('First Two:', firstTwo); // Expect: ['cat', 'dog']
console.log('After:', animals); // Expect: ['cat', 'dog', 'rabbit', 'hamster']


// === Exercise 2: Get the last two elements ===
const colors = ['red', 'green', 'blue', 'yellow'];
console.log('Original:', colors);

// TODO: Use slice to get the last two colors
const lastTwo = colors.slice(-2);

console.log('Last Two:', lastTwo); // Expect: ['blue', 'yellow']
console.log('After:', colors); // Should be unchanged


// === Exercise 3: Get the middle section ===
const letters = ['a', 'b', 'c', 'd', 'e'];
console.log('Original:', letters);

// TODO: Use slice to get ['b', 'c', 'd']
const middle = letters.slice(1, 4);

console.log('Middle:', middle); // Expect: ['b', 'c', 'd']
console.log('After:', letters); // Should be unchanged

// === Exercise 4: Copy the entire array using slice ===
const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log('Original:', fruits);

// TODO: Use slice to create a full copy of the array
const fruitsCopy = fruits.slice(0, fruits.length); // your code here

console.log('Copy:', fruitsCopy); // Expect: ['apple', 'banana', 'cherry', 'date']


// === Exercise 5: Get all elements except the first one ===
const scores = [90, 85, 78, 92];
console.log('Original:', scores);

// TODO: Use slice to get all but the first element
const withoutFirst = scores.slice(1, scores.length); // your code here

console.log('Without First:', withoutFirst); // Expect: [85, 78, 92]


// === Exercise 6: Get the last 3 characters of a string using slice (on an array) ===
const word = 'JavaScript';
const chars = word.split('');
console.log('Original Characters:', chars);

// TODO: Use slice to get the last 3 characters
const lastThreeChars = chars.slice(-3); // your code here

console.log('Last 3 Chars:', lastThreeChars); // Expect: ['i', 'p', 't']

// === Exercise 7: Get the first half of the array ===
const numbers = [10, 20, 30, 40, 50, 60];
console.log('Original:', numbers);

// TODO: Use slice to get the first half (first 3 elements)
const firstHalf = numbers.slice(0, 3);

console.log('First Half:', firstHalf); // Expect: [10, 20, 30]


// === Exercise 8: Get all elements except the last one ===
const cities = ['New York', 'Paris', 'Tokyo', 'London'];
console.log('Original:', cities);

// TODO: Use slice to exclude the last element
const withoutLast = cities.slice(0, cities.length - 1);

console.log('Without Last:', withoutLast); // Expect: ['New York', 'Paris', 'Tokyo']


// === Exercise 9: Extract middle part of array (excluding first and last) ===
const temps = [72, 75, 78, 80, 82];
console.log('Original:', temps);

// TODO: Use slice to get only [75, 78, 80]
const middleTemps = temps.slice(1, temps.length - 1);

console.log('Middle Temps:', middleTemps); // Expect: [75, 78, 80]
