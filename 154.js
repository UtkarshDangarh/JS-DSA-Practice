//Write a function that returns the sum of all numbers in an array.

function ArrSum(arr) {
  return arr.reduce((acc, crr) => {
    return (acc = acc + crr);
  }, 0);
}

let arr = [1, 2, 3, 4, 5];

console.log(ArrSum(arr));
