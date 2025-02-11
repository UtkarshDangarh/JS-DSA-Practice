//Chaining Callbacks: Write two functions, add and multiply, that take a number as an argument and return the
//result of adding 5 or multiplying by 2, respectively. Create a function chainedOperations that first adds
//5 and then multiplies the result by 2 using callbacks.

function chainedOperations(num, cb1, cb2) {
  let add = cb1(num);
  let mul = cb2(add);
  return mul;
}

function add(num) {
  return num + 5;
}

function multiply(num) {
  return num * 2;
}

console.log(chainedOperations(2, add, multiply));
