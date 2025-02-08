//Write a function that takes two numbers and returns their division with error handling (check for division by zero).

function divide(num1, num2) {
  if (num2 === 0) {
    var message = "Can not divide by 0";
    return message;
  } else {
    var ans = num1 / num2;
    return ans;
  }
}

console.log(divide(50, 0));
