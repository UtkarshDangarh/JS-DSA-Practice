//Copying Arrays: Write a function copyArray that takes an array as input and returns a new array that is a
//copy of the input array using the spread operator. Modify one element in the copied array to verify that
//the original array is not affected.

const numbers = [1, 2, 3, 4, 5];
function copyArray(arr) {
  let newArr = [...arr];
  newArr[2] = 55; //This will not modify the original array because Primitive values (like numbers, strings, booleans) are copied by value not by reference
  return newArr;
}

console.log(numbers);
console.log(copyArray(numbers));
console.log(numbers);
