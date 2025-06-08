// === Exercise 1: Check if All Users Are Verified ===
const users = [
  { id: 1, name: 'Sam', verified: true },
  { id: 2, name: 'Alex', verified: true },
  { id: 3, name: 'Charlie', verified: true }
];

// TODO: Use every to check if all users are verified
const allVerified = users.every(user => user.verified);

console.log('All Verified:', allVerified);


// === Exercise 2: Check if All Scores Are Passing (>= 70) ===
const scores = [82, 91, 78, 95, 88];

// TODO: Use every to check if all scores are passing
const allPassing = scores.every(score => score >= 70);

console.log('All Passing:', allPassing);


// === Exercise 3: Check if All Tasks Are Completed ===
const tasks = [
  { id: 1, name: 'Write docs', status: 'completed' },
  { id: 2, name: 'Fix bug', status: 'completed' },
  { id: 3, name: 'Refactor code', status: 'completed' }
];

// TODO: Use every to check if all tasks have status 'completed'
const allCompleted = tasks.every(task => task.status === 'completed');

console.log('All Tasks Completed:', allCompleted);
