// === Exercise 1: Check for Admin User ===
const users = [
  { id: 1, name: 'Sam', role: 'user' },
  { id: 2, name: 'Alex', role: 'admin' },
  { id: 3, name: 'Charlie', role: 'user' }
];

// TODO: Use some to check if there's at least one admin
const hasAdmin = users.some(user => user.role === 'admin');

console.log('Has Admin:', hasAdmin);


// === Exercise 2: Check for Overdue Tasks ===
const tasks = [
  { id: 1, name: 'Submit report', status: 'done' },
  { id: 2, name: 'Pay invoice', status: 'overdue' },
  { id: 3, name: 'Email client', status: 'pending' }
];

// TODO: Use some to check if any task is overdue
const hasOverdue = tasks.some(task => task.status === 'overdue');

console.log('Has Overdue Task:', hasOverdue);


// === Exercise 3: Check if Any Price Exceeds Budget ===
const prices = [25, 55, 10, 75, 42];
const budget = 50;

// TODO: Use some to check if any price is greater than the budget
const exceedsBudget = prices.some(price => price > budget);

console.log('Exceeds Budget:', exceedsBudget);
