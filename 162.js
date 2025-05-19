//Write a JavaScript program to find the largest element in a nested array.

const arr = [1, 9, [3, 5, 1], [12, 7], 5, [9, 0, 4, 8], [6]];

function flat(arr) {
  let flatten = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten = flatten.concat(flat(arr[i]));
    } else {
      flatten.push(arr[i]);
    }
  }
  return flatten;
}

const flatArr = flat(arr);

let largest = Math.max(...flatArr);
console.log(largest);
