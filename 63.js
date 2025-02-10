//Incrementing by 1: Write a function incrementEachByOne that takes an array of numbers and returns a new
//array where each number is Ineremented by 1.

function incrementEachByOne(arr) {
  let incremented = arr.map((item) => item + 1);
  return incremented;
}

const nums = [1, 2, 3, 4, 5, 6];

console.log(incrementEachByOne(nums));
