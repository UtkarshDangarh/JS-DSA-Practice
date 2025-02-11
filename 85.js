//Destructuring with Rest: Write a function extractFirstAndRest that takes an array of numbers as an argument. Use
//destructuring and the rest parameter to separate the first element from the rest of the elements in the array.

function extractFirstAndRest(numbers) {
  const [first, ...rest] = numbers; // Destructuring first element, rest goes into an array
  return { first, rest };
}

console.log(extractFirstAndRest([1, 2, 3, 4, 5]));
