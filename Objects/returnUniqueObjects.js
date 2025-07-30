const people = [
  { id: 1, name: "Alice", mob: 123 },
  { id: 1, name: "Alice", mob: 123 },
  { id: 2, name: "Bob", mob: 456 },
  { id: 3, name: "Charlie", mob: 789 },
  { id: 2, name: "Bob", mob: 456 },
];

// Set is always unique
let a = new Set(people);
console.log(a);
