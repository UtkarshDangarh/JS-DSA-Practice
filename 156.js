//find the largest/smallest  number in an array.

const arr = [12, 1, 5, 12, 76, 23, 97, 34, -1, 76, 53, 39, 154, 124];

//Approach 1: Bruteforce

// let largest = 0;
// let smallest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }

// console.log(largest);
// console.log(smallest);

// Approach 2: sort the array and select the elements

// let sorted = arr.sort((a, b) => a - b);

//for Largest
// let largest = sorted[sorted.length - 1];
// console.log(largest);

//With empty array checking
// let largest = sorted.length > 0 ? sorted[sorted.length - 1] : null;

//for smllest
// let smallest = sorted[0];

// console.log(smallest);

//Approach 3: Using Math.min() and Math.max() with spread operator

// let largest = Math.max(...arr);
// let smallest = Math.min(...arr);
// console.log(largest);
// console.log(smallest);

//Approach 4: For very large arrays

let smallest = Infinity;
let largest = -Infinity;

//for...in iterates over the keys (indices) of the array.
//Always use for of loop when iterating through array values
for (let i of arr) {
  if (i > largest) {
    largest = i;
  }
  if (i < smallest) {
    smallest = i;
  }
}

console.log(largest);
console.log(smallest);
