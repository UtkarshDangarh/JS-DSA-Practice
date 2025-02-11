//Handling Multiple Arguments: Write a function concatenateStrings that takes any number of string arguments
//and returns them concatenated into a single string using the rest parameter.

//Using Reduce: THis will concatenate the string without any space
// function concatenateStrings(...str) {
//   return str.reduce((acc, crr) => acc + crr);
// }

//Using .join() menthod: this wil join with a seperator

function concatenateStrings(...strings) {
  return strings.join(" ");
}

console.log(concatenateStrings("Gohan", "Goku", "Vegeta"));
