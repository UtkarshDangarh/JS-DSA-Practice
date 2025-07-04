//Find Second largest element in Array

const arr = [4, 9, 53, 13, 12, 61, 8, 7, 1];

if (arr.length < 2) {
  return null;
}

let largest = -Infinity;
let secondLargest;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log(secondLargest);
