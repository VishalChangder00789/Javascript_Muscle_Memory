// sum of even numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// even numbers are the ones which gets divided by 2
let a = arr.reduce((acc, curr) => {
  if (curr % 2 == 0) {
    return acc + curr;
  }

  return acc;
}, 0);

// console.log(a);
/**
 * 
 * 










 */
// Grouping objects based on property

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

// Output:
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }]
// }

const groupPeopleByKey = (key, people) => {
  if (!key) {
    return "Please pass key";
  }

  let a = people.reduce((acc, curr) => {
    if (!acc[curr[key]]) {
      acc[curr[key]] = [];
    }
    acc[curr[key]].push(curr);

    return acc;
  }, {});

  return a;
};

// console.log(groupPeopleByKey("age", people));

// create frequency array from numbers
const numbers = [1, 2, 2, 3, 3, 3, 4];
// Output:
// { 1: 1, 2: 2, 3: 3, 4: 1 }

let b = numbers.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? (acc[curr] += 1) : 1;
  return acc;
}, {});

console.log(b);

// remove duplicates from array
const nums = [1, 2, 2, 3, 4, 4, 5];

let c = nums.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);

console.log(c);
