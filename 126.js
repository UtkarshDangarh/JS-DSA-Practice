//Simulating a Delayed Task with Promise: Write a function delayedTask that takes a delay time (in millisecond) &
//returns a promise that resolves after the given delay. Use .then() to log a message once the delay has passed.

function delayedTask(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay has passed");
    }, delay);
  });
}

delayedTask(2000).then((value) => console.log(value));
