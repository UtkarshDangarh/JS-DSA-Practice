//Write a program that logs only the even numbers from an array.
// Note: Use reduce and other approaches to solve this question

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// var arr2 = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr2.push(arr[i]);
//   }
// }

// console.log(arr2);

//Using filter

var abc = arr.filter((ele) => ele % 2 === 0);
// var abc = arr.filter(function (ele) {
//   return ele % 2 === 0;
// });
console.log(abc);

//without creating a new array
arr.filter((num) => num % 2 === 0).forEach((num) => console.log(num));
