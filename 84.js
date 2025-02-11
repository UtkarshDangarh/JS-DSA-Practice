//Combining Rest and Spread: Write a function combineArrays that takes a fixed number of parameters
//(e.g., a name and age) followed by any number of array arguments. Use both the spread operator and
//rest parameter to combine the arrays into one final array, along with the name and age.

function combineArrays(name, age, ...arr) {
  return [name, age, ...arr.flat()];
}

console.log(combineArrays("Goku", 35, [1, 2, 3, 4]));
