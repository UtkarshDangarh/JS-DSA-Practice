//Average of Numbers: Write a function average that takes any number of numeric arguments and returns the
//average value, Use the rest parameter to gather the numbers and the spread operator to perform the calculation.

function average(...nums) {
  if (nums.length === 0) {
    return 0;
  }
  return [...nums].reduce((acc, crr) => acc + crr, 0) / nums.length;
}

console.log(average(1, 2, 3, 4, 5));
