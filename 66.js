//Doubling the Numbers: Write a function doubleNumbers that takes an array of numbers and returns a new array
//where each number is doubled. Use the map method to solve this.

function doubleNumbers(arr) {
  const double = arr.map((item) => item * 2);
  return double;
}

const nums = [1, 2, 3, 4, 5, 6];

console.log(doubleNumbers(nums));
