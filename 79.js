//Function Arguments with Spread: Write a function sum that accepts any number of arguments and returns their
//sum using the spread operator, Test it by passing multiple numbers

function sum(...nums) {
  return nums.reduce((acc, crr) => acc + crr, 0);
}

console.log(sum(12, 14));
console.log(sum(1, 2, 3, 4, 5));
