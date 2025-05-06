//Write a function createCounter that defines a variable count set to 0. The function should return
//another function that increments and logs count each time it’s called. Call the returned function
//multiple times to see if count is preserved.

function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); //Output 1
counter(); //Output 2
counter(); //Output 3
//Created counter because createCounter() returns a function (a closure), and we need to store that
//returned function in counter to call it later.

//if we call createCounter()() directly instead of storing it,
//Every time we call createCounter(), a new count variable is created and reset to 0.

const newCount = createCounter();

newCount(); //Output = 1
newCount(); //Output = 2
newCount(); // Output = 3
//Each call to createCounter() creates a new independent closure with its own count.
