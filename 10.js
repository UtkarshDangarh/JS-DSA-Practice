//Create a function that takes an array of numbers and returns a new array with each element doubled.

var arr = [1, 2, 3, 4, 5, 6, 7];
var arr2 = [];

for (let i = 0; i < arr.length; i++) {
  //   var doubled = arr[i] * 2;
  //   arr2.push(doubled);
  arr2.push(arr[i] * 2);
}

// console.log(arr2);

//Using Map
let doubled = arr.map((item) => item * 2);

console.log(doubled);
