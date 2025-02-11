//Combining Function Arguments and Array: Write a function mergeArraysAndSum that takes an array of numbers
//and any number of additional numbers (using the rest parameter). Use the spread operator to merge the array
//with the additional numbers, and return the sum of all numbers.

function mergeArraysAndSum(arr, ...nums) {
  const merged = [...arr, ...nums];
  return merged.reduce((acc, crr) => acc + crr, 0);
}

console.log(mergeArraysAndSum([1, 2, 3, 4], 5, 6, 7));
