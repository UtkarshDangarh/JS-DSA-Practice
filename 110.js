//Find the missing number from array of 1 to n  with O(n) complexity

const arr = [1, 2, 4, 5, 7, 6, 9, 8];

function sum(num) {
  return (num * (num + 1)) / 2;
}

let arrSum = 0;
for (i = 0; i < arr.length; i++) {
  arrSum = arrSum + arr[i];
}

let s = sum(9);

let result = s - arrSum;
console.log(result);
