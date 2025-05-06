//Find the nth largest element in a sorted array

const arr = [1, 2, 3, 4, 5, 8, 9, 12];
//If array is not sorted first sort the array
//Just substract n from arr.lrngth
n = 3;

//here arr.length = 8
//let n = 3, we need to find 3rd largest number
// 8-3 = 5, let's check value at index 5
//arr[5] = 8 hence 8 is the answer
const ans = arr[arr.length - n];
console.log(ans);

// FOr decending sorted array
// const ans = arr[n - 1];
// console.log(ans);
