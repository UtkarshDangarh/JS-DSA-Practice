//Using Callbacks for Function Composition: Write two functions, double and square, that take a number as
//input and return its double and square, respectively. Then, write a function calculate that takes a number
//and two callbacks, calling the first callback on the number and then passing the result to the second callback.

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function calculate(num, cb1, cb2) {
  let data = cb1(num);
  return cb2(data);
}

console.log(calculate(2, double, square));
