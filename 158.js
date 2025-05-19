//Implement a function that returns the average value of numbers in an array.

const arr = [12, 1, 5, 12, 76, 23, 97, 4, 124];

let sum = arr.reduce((acc, crr) => {
  return (acc = acc + crr);
}, 0);

console.log(sum);

let avg = sum / arr.length;
console.log(avg);

// let avgg =
//   arr.reduce((acc, crr) => {
//     return (acc = acc + crr);
//   }, 0) / arr.length;
// console.log(avgg);
