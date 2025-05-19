//Implement a function that finds the index of a specific element in an array. If the element is not found, the
//function should return -1. (Linear search program)

const arr = [12, 1, 5, 12, 76, 23, 97, 4, 124];
const target = 76;

function search(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(search(arr));
