//Filtering Array with Callback: Write a function filterArray that takes an array of numbers and a callback
//function. The function should return a new array containing only the numbers that pass the condition defined
//in the callback. Test it with a callback that filters out numbers less than 5.

//Approach 1: Passing entire array into callback
// function filterArray(arr, cb) {
//   return cb(arr);
// }

// function filtered(arr) {
//   let filteredArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 5) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(filterArray(numbers, filtered));

//Approach 2 : Passing individual elements to the callback
function filterArray(arr, cb) {
  let filteredArray = []; // New array to store filtered elements

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      // Apply the callback to each individual element
      filteredArray.push(arr[i]); // Add element if callback returns true
    }
  }

  return filteredArray;
}

// Callback function to filter numbers less than 5
function filtered(num) {
  return num < 5;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filterArray(numbers, filtered));
// Output: [1, 2, 3, 4]
