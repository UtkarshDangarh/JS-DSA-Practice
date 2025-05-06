//Timeout with Promise: Write a function timeout that simulates a timeout by returning a promise that resolves
//after 5 seconds. If it takes longer, reject the promise with a "Timeout error". Use .then() and .catch() to
//handle both the resolved and rejected states.

function timeout(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t <= 5000) {
        resolve("Promise Fulfilled");
      } else {
        reject("Timeout Error");
      }
    }, t);
  });
}

timeout(6000)
  .then((value) => console.log(value))
  .catch((err) => console.log("Error: ", err));
