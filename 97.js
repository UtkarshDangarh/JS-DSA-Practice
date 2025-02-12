//Function Composition: Write a function compose that takes two functions as arguments and returns a new
//function. When the new function is called, it should apply the first function to the arguments and then
//apply the second function to the result. Test it with functions like add1 (adds 1 to a number) and double
//(doubles a number).

function compose(func1, func2) {
  return function (value) {
    return func2(func1(value)); // Apply func1 first, then func2,
  };
}

// Example functions
function add1(num) {
  return num + 1;
}

function double(num) {
  return num * 2;
}

// Create a composed function
const addThenDouble = compose(add1, double);
const doubleThenAdd = compose(double, add1);

console.log(addThenDouble(5)); // 5 Will be passed as vale in the returned function
console.log(doubleThenAdd(5)); // (5 * 2) + 1 = 11
