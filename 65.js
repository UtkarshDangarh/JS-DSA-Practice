//Uppercasing Strings: Write a function toUpperCase Array that takes an array of strings and returns a new
//array with each string converted to uppercase using the map method.

function toUpperCase(arr) {
  const upperCase = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  return upperCase;
}

const names = ["sandeep", "bob", "charlie", "david", "eve"];

console.log(toUpperCase(names));
