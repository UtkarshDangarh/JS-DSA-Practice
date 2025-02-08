//Write a function to find the largest number in an array.

//Note: Solve this using reduce later another approach

var arr = [1, 2, 3, 4, 5, 44, 65, 12, 54, 88, 19, 17];
var largest = 0;

//Bruteforce approach
for (i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);

//Using Math.max() with Spread Syntax

function findLargestEle(arr) {
  return Math.max(...arr);
}

console.log(findLargestEle(arr));
//Explanation:
//Math.max() returns the largest of zero or more numbers.
//The spread operator (...arr) expands the array into individual arguments for Math.max().
