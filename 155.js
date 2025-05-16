//Remove all white space from string

let str = "I'm the Gift";

//Approach 1: using split() & join() methods
//we'll split string on each space
//use join to join elements of array with "" (0 space) seperator
// let newStr = str.split(" ").join("");

// console.log(newStr);

//Aproach 2: Using replace() mehtod with Regular expressions

// let newStr = str.replace(/ /g, "");

// console.log(newStr);

//trim() method

//The trim() method removes leading and trailing whitespace from a string. It’s useful when dealing with user input or data from external sources:
// used when we need to remove space from a word in srting.
const newStr = "   newStr   ";
console.log(newStr.trim());
