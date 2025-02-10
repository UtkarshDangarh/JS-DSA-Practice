//Transform and Sum Positive Numbers: Write a function transformAndSum that takes an array of numbers,
//filters out the negative numbers, maps the remaining numbers by squaring them, and then returns the sum
//of the squared numbers using reduce

let numbers = [1, 2, 3, 4, 5, -4, -5, -2, -9];

function transformAndSum(arr) {
  let positives = arr.filter((num) => num >= 0);
  let squared = positives.map((num) => num * num);
  let sum = squared.reduce((acc, crr) => acc + crr, 0);
  return sum;
}

console.log(transformAndSum(numbers));
