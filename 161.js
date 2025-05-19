//Print all duplicate elements of an array

const arr = [1, 3, 5, 3, 7, 9, 1, 5, 3, 7, 9, 9, 2, 5];

//Approach 1: Using frequency object
// let frequency = {};
// let duplicates = [];

// for (let i of arr) {
//   frequency[i] = (frequency[i] || 0) + 1;
// }

// console.log(frequency);

// for (let i in frequency) {
//   if (frequency[i] > 1) {
//     duplicates.push(Number(i));
//     // console.log(i);  //can use this if we do not have to return it in an array
//   }
// }

// console.log(duplicates);

//Approach 2: Using Set

// let seen = new Set();
// let duplicates = new Set();

// for (let num of arr) {
//   if (seen.has(num)) {
//     duplicates.add(num);
//   } else {
//     seen.add(num);
//   }
// }

// console.log([...duplicates]);

//Approach 3: Using Reduce
//This is same as first approach only difference is we use reduce to create frequency map1
const freq = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const duplicates = Object.keys(freq)
  .filter((key) => freq[key] > 1)
  .map(Number);

console.log(duplicates); // [1, 2, 3]

//To print all unique values from an array

let frequency = {};

for (let i of arr) {
  frequency[i] = (frequency[i] || 0) + 1;
}

let uniques = Object.keys(frequency).map(Number);

console.log(uniques);
