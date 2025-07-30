/**
 *  Use Cases
 * Adding numbers in array
 * Find Occurnaces
 * Find Maximum value
 * Flatten an array : Meaning remove all the nested ararys using a concat method internally to merge two arrays
 *
 *
 *
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// sum of all the elements of the array
let a = arr.reduce((acc, val, index, arr) => {
  return acc + val;
}, 0);

console.log(a);

// Find maximum
let arr2 = [2, 8, , 4, 10];

let b = arr2.reduce(
  (acc, curr) => {
    return Math.max(acc, curr);
  },
  [arr2[0]]
);

console.log(b);

// count occurances
let arr3 = ["apple", "banana", "apple", "orange", "banana", "apple"];
// in this case accumulator will be an empty object

let c = arr3.reduce((acc, fruit) => {
  console.log(acc, fruit, acc[fruit]);
  acc[fruit] = acc[fruit] ? (acc[fruit] += 1) : 1;
  return acc;
}, {});

console.log(c);

// Flatten Array or remove nested arrays
// use the concat method to merge two arrays
const nested = [[1, 2], [3, 4], [5]];

let d = nested.reduce((acc, curr) => {
  return acc.concat(curr);
});

console.log(d);
