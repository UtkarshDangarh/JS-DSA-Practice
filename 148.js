//How to empty an array in JS?

let arr = [1, 2, 3, 4];
//Overwriting the original array with an empty one
// arr = [];

//Using the property of length
// by setting length to 0
// arr.length = 0;

//Using pop method
//This method is used to remove last element of an array. It permanently alters the original array.
// while (arr.length > 0) {
//   arr.pop();
// }
// console.log(arr);

//Using shift method
//This method is used to remove first element of an array. This permanently alters the original array.
while (arr.length > 0) {
  arr.shift();
}
console.log(arr);
