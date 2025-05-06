// Simulating Async Operations using setTimeout

const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    success ? resolve("Successful after the delay") : reject("Failed");
  }, 2000);
});

delayedPromise
  .then((value) => {
    console.log("Resolved:", value); // Logs the value passed to resolve()
  })
  .catch((error) => {
    console.log("Rejected: ", error);
  });
