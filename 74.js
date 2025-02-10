//Sum of Even Numbers: Write a function sumofEvenNumbers that takes an array of numbers, filters out the odd
//numbers, then maps the even numbers by multiplying them by 2, and finally reduces them to get the sum

const numbers = [3, 6, 9, 12, 15, 18, 1, 4, 7, 10, 13, 16, 19, 2];

function sumofEvenNumbers(arr) {
  let even = arr.filter((num) => num % 2 === 0);
  let doubled = even.map((num) => num * 2);
  let sum = doubled.reduce((acc, crr) => acc + crr, 0);
  return sum;
}

console.log(sumofEvenNumbers(numbers));
