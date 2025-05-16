//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

//Using Filter, Can also write this with loops
function even(arr) {
  return arr.filter((ele) => ele % 2 === 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(even(arr));
