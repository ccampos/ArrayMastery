// === Exercise 1: Find First Admin ===
const users = [
  { id: 1, name: 'Sam', role: 'user' },
  { id: 2, name: 'Alex', role: 'admin' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Eve', role: 'admin' }
];

// TODO: Use find to get the first user with role 'admin'
const firstAdmin = users.find(user => user.role === 'admin');

console.log('First Admin:', firstAdmin);


// === Exercise 2: Find First Number Greater Than 100 ===
const numbers = [25, 78, 99, 102, 67, 150];

// TODO: Use find to get the first number greater than 100
const firstLargeNumber = numbers.find(number => number > 100);

console.log('First Number > 100:', firstLargeNumber);


// === Exercise 3: Find Product by SKU ===
const products = [
  { sku: 'x123', name: 'Keyboard' },
  { sku: 'y456', name: 'Mouse' },
  { sku: 'z789', name: 'Monitor' }
];

// TODO: Use find to get the product with sku 'y456'
const matchingProduct = products.find(product => product.sku === 'y456');

console.log('Matching Product:', matchingProduct);
