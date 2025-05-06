//Create a simple Promise and consume it

//Cerating a promise
const myPromise = new Promise((resolve, reject) => {
  const success = false;
  success ? resolve("Operation Successfull") : reject("Operation failed");
});

//Consuming a Promise
myPromise
  .then((value) => {
    console.log("Resolved:", value); // Logs the value passed to resolve()
  })
  .catch((error) => {
    console.error("Rejected:", error); // Logs the value passed to reject()
  });
