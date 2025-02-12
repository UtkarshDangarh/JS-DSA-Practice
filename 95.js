//Asynchronous Callback with setTimeout: Create a function delayedSum that takes two numbers and a callback.
//After a 3-second delay (using setTimeout), call the callback with the sum of the two numbers.

function delayedSum(num1, num2, cb) {
  setTimeout(() => cb(num1, num2), 3000);
}

function sum(num1, num2) {
  console.log(num1 + num2);
}

delayedSum(1, 2, sum);

//delayedSum is not returing anything hence we will not log as it'll log undefined, we'll just call it an it'll
//log the sum
