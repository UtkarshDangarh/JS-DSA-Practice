//Closure with Parameters: Write a function makeAdder that takes a number x and returns a function
//that takes another number y and returns the sum of x and y. Test it by creating an instance
//with x = 5 and calling it with different values of y.

function makeAdder(x) {
  return function inner(y) {
    return x + y;
  };
}

const add = makeAdder(5);
//Here add will accepet arguments for inner function, because makeAdder is returning
//a function and we are storing it in add
console.log(add(6));
console.log(add(8));
