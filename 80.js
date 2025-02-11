//Nested Arrays: Write a function flattenArray that takes a nested array (e.g., [[1, 21, [3, 4], [5]] and
//flattens it into a single array using the spread operator.

const arr = [[1, 21], [3, 4], [5]];

function flattenArray(arr) {
  return arr.reduce(
    (acc, crr) =>
      Array.isArray(crr) ? [...acc, ...flattenArray(crr)] : [...acc, crr],
    []
  );
}

console.log(flattenArray(arr));

//In arrow function if using {} then we have to mention return keyword else it'll not work and if we do not
// want to use return then write it in a single-line expression (no {} block).
