//Summing an Array of Numbers: Write a function sumArray that takes an array of numbers and returns the sum of
//all the numbers using the reduce method.

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

//Here 0 is the initial value and this will be starting value of accumulator

console.log(sumArray(numbers));
//with each iteration accumulator will hold the return value of the callback function i.e. accumulatior + currentValue
//Initial value is optional but highly recommended for clarity.
