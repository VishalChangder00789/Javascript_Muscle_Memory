// Merge Objects with conditional combined logic

const arr = [
  { id: 1, scores: [10, 20] },
  { id: 2, scores: [30] },
  { id: 1, scores: [40] },
];

// Output:
// [
//   { id: 1, scores: [10, 20, 40] },
//   { id: 2, scores: [30] }
// ]

let a = Object.values(
  arr.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = {};
      acc[curr.id].id = curr.id;
      acc[curr.id].scores = [];
    }

    acc[curr.id].scores = acc[curr.id].scores.concat(curr.scores);

    return acc;
  }, {})
);

console.log(a);
