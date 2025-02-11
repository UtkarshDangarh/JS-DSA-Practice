//Summing Numbers with Rest: Write a function sumNumbers that accepts any number of numeric arguments and
//returns their sum using the rest parameter.

function sumNumbers(...nums) {
  return nums.reduce((acc, crr) => acc + crr, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));
