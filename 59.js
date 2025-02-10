//Merging Arrays: Write a function mergeArrays that takes two arrays and merges them into a single array using
//the spread operator. Test it by merging arrays of numbers and strings.

function mergeArrays(arr1, arr2) {
  let third = [...arr1, ...arr2];
  console.log(third);
}

let numbers = [1, 2, 3, 4, 5];
let str = ["Rahul", "Dksha", "Sandeep"];

mergeArrays(numbers, str);
