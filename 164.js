//Find Lasgest number in an Array

let arr = [2, 3, 1, 5, 7, 32, 87, 6, 12, 36];

function findLargest(arr) {
  let largest = -Infinity;
  //Instead of -Infinity we can also assume 1st element as largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest(arr));
