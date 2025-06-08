// === Exercise 1: Remove two items starting from index 2 ===
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

console.log(colors); // Expect: ['red', 'green', 'blue', 'yellow', 'purple']

// Your code here
colors.splice(2, 2);

console.log(colors); // Expect: ['red', 'green', 'purple']

// === Exercise 2: Replace the item at index 1 with 'grapefruit' ===
const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits); // Expect: ['apple', 'banana', 'cherry']

// Your code here
fruits.splice(1, 1, 'grapefruit');

console.log(fruits); // Expect: ['apple', 'grapefruit', 'cherry']

// === Exercise 3: Insert 'sun' and 'moon' at index 1, remove 0 ===
const things = ['earth', 'mars'];

console.log(things); // Expect: ['earth', 'mars']

// Your code here
things.splice(1, 0, 'sun', 'moon');

console.log(things); // Expect: ['earth', 'sun', 'moon', 'mars']

// === Exercise 4: Remove the last item using splice ===
const animals = ['cat', 'dog', 'rabbit', 'hamster'];

// TODO: Use splice to remove the last item
animals.splice(-1, 1);
console.log('After:', animals);


// === Exercise 5: Replace 'Jan' and 'Feb' with 'Q1' ===
const months = ['Jan', 'Feb', 'Mar', 'Apr'];

// TODO: Use splice to replace 'Jan' and 'Feb' with 'Q1'

months.splice(0, 2, 'Q1')
console.log('After:', months);


// === Exercise 6: Add 'Sunday' and 'Saturday' to the end ===
const days = ['Monday', 'Tuesday', 'Wednesday'];

// TODO: Use splice to add 'Sunday' and 'Saturday' to the end
days.splice(days.length, 0, 'Sunday', 'Saturday');

console.log('After:', days);

// === Exercise 7: Remove the first two items ===
const scores = [100, 98, 95, 90, 85];
console.log('Before:', scores);

// TODO: Use splice to remove the first two items
scores.splice(0, 2);

console.log('After:', scores); // Expect: [95, 90, 85]


// === Exercise 8: Insert 'x', 'y', 'z' at index 2 without removing anything ===
const letters = ['a', 'b', 'c', 'd'];
console.log('Before:', letters);

// TODO: Use splice to insert 'x', 'y', 'z' at index 2
letters.splice(2, 0, 'x', 'y', 'z');

console.log('After:', letters); // Expect: ['a', 'b', 'x', 'y', 'z', 'c', 'd']


// === Exercise 9: Replace the last two elements with 'done' ===
const statusList = ['pending', 'processing', 'waiting', 'queued'];
console.log('Before:', statusList);

// TODO: Use splice to replace the last two elements with 'done'
statusList.splice(-2, 2, 'done');

console.log('After:', statusList); // Expect: ['pending', 'processing', 'done']

// === Exercise 10: Remove all items except the first one ===
const queue = ['first', 'second', 'third', 'fourth'];
console.log('Before:', queue);

// TODO: Use splice to remove all but the first item
queue.splice(1, queue.length - 1);
console.log('After:', queue); // Expect: ['first']


// === Exercise 11: Replace the middle two items with 'center' ===
const shapes = ['circle', 'square', 'triangle', 'hexagon'];
console.log('Before:', shapes);

// TODO: Use splice to replace 'square' and 'triangle' with 'center'
shapes.splice(1, 2, 'center');

console.log('After:', shapes); // Expect: ['circle', 'center', 'hexagon']


// === Exercise 12: Insert 'alpha' at the start and 'omega' at the end ===
const greek = ['beta', 'gamma', 'delta'];
console.log('Before:', greek);

// TODO: Use splice to add 'alpha' to the beginning and 'omega' to the end

greek.splice(0, 0, 'alpha');
greek.splice(greek.length, 0, 'omega');
console.log('After:', greek); // Expect: ['alpha', 'beta', 'gamma', 'delta', 'omega']

// === Exercise 13: Remove all items ===
const inventory = ['item1', 'item2', 'item3', 'item4'];
console.log('Before:', inventory);

// TODO: Use splice to remove all items
inventory.splice(0, inventory.length);

console.log('After:', inventory); // Expect: []


// === Exercise 14: Replace all vowels with 'vowel' ===
const letters2 = ['a', 'b', 'e', 'c', 'i', 'o'];
console.log('Before:', letters2);

// TODO: Use splice to replace 'a', 'e', 'i', 'o' with 'vowel' (each individually)
letters2.splice(0, 1, 'vowel');
letters2.splice(2, 1, 'vowel');
letters2.splice(4, 1, 'vowel');
letters2.splice(5, 1, 'vowel');

console.log('After:', letters2); // Expect: ['vowel', 'b', 'vowel', 'c', 'vowel', 'vowel']


// === Exercise 15: Insert numbers 4, 5, 6 after the number 3 ===
const nums = [1, 2, 3, 7, 8, 9];
console.log('Before:', nums);

// TODO: Use splice to insert 4, 5, 6 after 3
nums.splice(3, 0, 4, 5, 6);

console.log('After:', nums); // Expect: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// === Exercise 16: Remove the third item only ===
const tools = ['hammer', 'screwdriver', 'wrench', 'pliers'];
console.log('Before:', tools);

// TODO: Use splice to remove only 'wrench'
tools.splice(2, 1);

console.log('After:', tools); // Expect: ['hammer', 'screwdriver', 'pliers']


// === Exercise 17: Insert 'login', 'signup' at the beginning ===
const routes = ['home', 'about', 'contact'];
console.log('Before:', routes);

// TODO: Use splice to insert 'login' and 'signup' at the beginning

routes.splice(0, 0, 'login', 'signup');
console.log('After:', routes); // Expect: ['login', 'signup', 'home', 'about', 'contact']


// === Exercise 18: Replace everything after the first item with 'archived' ===
const documents = ['resume.pdf', 'cover_letter.docx', 'portfolio.zip', 'references.txt'];
console.log('Before:', documents);

// TODO: Use splice to replace all items after the first with a single 'archived' item

documents.splice(1, documents.length - 1, 'archive');
console.log('After:', documents); // Expect: ['resume.pdf', 'archived']
