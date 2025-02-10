//Flattening an Array of Arrays: Write afunction flattenArray that takes an array of arrays
//(e.g. [[1, 21, 13, 4), [5]]) and returns a flattened array using the reducI method.

const arr = [[1, 21, 13, 4], [5], [2, 4, 8], 9];

function flattenArray(arr) {
  return arr.reduce((acc, crr) => acc.concat(crr), []);
}

console.log(flattenArray(arr));

// The accumulator (acc) starts as an empty array [].
// Each sub-array (cur) is concatenated into acc.
// The final result is a single flattened array.
