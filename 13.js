//Use map to create an array with each number squared from an existing array of numbers.
//Note: Solve this using reduce
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
//Using Map
// var squared = arr.map((ele) => ele * ele);

//Using for loop
// var squared = [];

// for (i = 0; i < arr.length; i++) {
//   squared.push(arr[i] * arr[i]);
// }

//Using For each
// var squared = [];
// arr.forEach((num) => squared.push(num * num));

//Using For of

var squared = [];
for (const num of arr) {
  squared.push(num * num);
}

console.log(squared);
