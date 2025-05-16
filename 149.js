//How to check if a number is int or not

//Using bruteforce

// function isInt(num) {
//   if (num % 1 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = isInt(1.1);
// console.log(result);

//Using Number.isInteger()
let num = 5;
const result = Number.isInteger(num);
console.log(result);
