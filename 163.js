//Write a function that returns number of negative numbers in an array

const arr = [1, 4, -2, -1, -6, -5, 7, -11, 9];

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      ++count;
    }
  }
  return count;
}

console.log(countNegative(arr));
