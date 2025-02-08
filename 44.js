//Private Variables with Closures: Create a function counter that returns an object with two
//methods: increment and getCount. Use a closure to keep a private count variable that’s only accessible
//to these methods. Test the counter to ensure count is private.

function counter() {
  let count = 0; //this will only accessible inside counter fn

  let obj = {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
  return obj;
}

const myCounter = counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());

// when we are storing a function call inside a variable which returns a function (for closure),
// if the stored function does not return anything and we log the function call it'll log undefined. e.g. myCounter
