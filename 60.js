//Filtering Out Negative Numbers: Write a function filterOutNegatives that takes an array of numbers and
//returns a new array with only the non-negative numbers.

const num = [1, 2, 4, -3, -56, 8, -22];

function filterOutNegatives(arr) {
  let positives = arr.filter((item) => item >= 0);
  return positives;
}

let ans = filterOutNegatives(num);

console.log(ans);
