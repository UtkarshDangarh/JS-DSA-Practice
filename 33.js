//Example of closure
function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    return count;
  };
}

const closureFun = outerFunction();

console.log(closureFun());
console.log(closureFun());
console.log(closureFun());

//the inner function remembers the count variable even after outerFunction finish executing
//This happens because closureFun still holds a reference to the count variable inside outerFunction.

//A closure is created when a function retain access to it's outer scope even after outer function finish executing
//FUnction along with it's lexical scope bundeled together is known as closure
