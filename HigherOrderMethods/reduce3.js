// Deep Flatten Nested Flatten
// Because it is deeply nested and we are going to take care of it at all levels then we need to loop it continously
// we are going to use recursion

const input = [1, [2, [3, [4]], 5]];
const flattenDeeply = (input) => {
  return input.reduce((acc, curr, index) => {
    console.log("Index is : ", index + 1);
    console.log("Input at ith Index is :", input[index]);
    console.log("Accumulator is :", acc);
    console.log(acc.concat(Array.isArray(curr) ? flattenDeeply(curr) : curr));
    console.log(
      "=============================================================>"
    );
    return acc.concat(Array.isArray(curr) ? flattenDeeply(curr) : curr);
  }, []);
};

// console.log(flattenDeeply(input));

/**
 *
 *
 *
 */

// Group by multiple properties
// group first by city and then role
// Output:
// {
//   NY: { dev: [{...}], tester: [{...}] },
//   SF: { dev: [{...}] }
// }

const people = [
  { name: "Alice", city: "NY", role: "dev" },
  { name: "Bob", city: "SF", role: "dev" },
  { name: "Charlie", city: "NY", role: "tester" },
];

const groupPeopleMultipleProps = (people) => {
  return people.reduce((acc, curr) => {
    // make the inner object first
    let { city, role } = curr;

    if (!acc[city]) {
      acc[city] = {};
    }

    if (!acc[city][role]) {
      acc[city][role] = [];
    }

    acc[city][role].push(curr);

    return acc;
  }, {});
};

console.dir(groupPeopleMultipleProps(people), { depth: null });

// Create a chunk array of size n specified by user
const input2 = [1, 2, 3, 4, 5, 6, 7];
const chunkSize = 3;

// [[1,2,3],[4,5,6],[7]]
let ab = input2.reduce((acc, curr, index) => {
  // Give a name = how to create same index using index and size
  // you can use idx/size this will change the index when the top index divides completely
  // lets say 0/3 1/3 2/3 all gives same result as 0

  let innerArrayAtIndex = Math.floor(index / chunkSize);

  if (!acc[innerArrayAtIndex]) {
    acc[innerArrayAtIndex] = [];
  }

  acc[innerArrayAtIndex].push(curr);

  return acc;
}, []);

console.log(ab);

// lodash group by
const data = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "banana" },
];

/*

{
  fruit: [{...}, {...}],
  veg: [{...}]
}

*/

const groupByUserSpecifiedId = (id, data) => {
  // id = fruit

  return data.reduce((acc, curr) => {
    let extractedIdKey = curr[id];

    if (!acc[extractedIdKey]) {
      acc[extractedIdKey] = [];
    }

    acc[extractedIdKey].push(curr);

    return acc;
  }, {});
};

console.log(groupByUserSpecifiedId("type", data));
