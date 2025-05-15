//Check if a num is prime or not

function prime(num) {
  if (num <= 2) {
    return true;
  }
  //Can not start loop from 3 as it will miss checking divisibility by 2
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Printing all prime numbers up to 100
const arr = [];
for (let i = 1; i < 99; i++) {
  if (prime(i)) {
    arr.push(i);
  }
}

console.log(arr);
