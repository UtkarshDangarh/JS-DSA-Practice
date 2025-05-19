//Find occurance of elements in an array
const arr = [1, 3, 5, 3, 7, 9, 1, 5, 3, 7, 9, 9, 2, 5];

//Approach 1: Using reduce
function countOccurrences(arr) {
  return arr.reduce((acc, crr) => {
    acc[crr] = (acc[crr] || 0) + 1;
    return acc; //The updated accumulator object is returned to the next iteration.
  }, {});
}
//acc[fruit] = (acc[fruit] || 0) + 1;
// console.log(countOccurrences(arr));

//Approach 2: Using for of loop
const frequency = {};

for (let item of arr) {
  frequency[item] = (frequency[item] || 0) + 1;
}

console.log(frequency);

//To get unique values from array
//Object.keys() returns strings by default, we need to convert each element into Numbers
let uniques = Object.keys(frequency).map(Number);

console.log(uniques);
