//Finding the Maximum Number: Write a function findMax that takes an array of numbers and returns the
//maximum number using reduce

const numbers = [1, 55, 88, 2, 3, 4, 5, 32, 6, 44];
function findMax(arr) {
  return arr.reduce((acc, cur) => (acc > cur ? acc : cur), arr[0]);
}

//arr[0] is set as initial value which will be the starting value of accumulator.
// if accumulator is greater then current return acc else return current
console.log(findMax(numbers));
