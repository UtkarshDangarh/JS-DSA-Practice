//fizzbuzz program

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return "No fizzbuzz for you!";
  }
}

const result = fizzbuzz(7);

console.log(result);
