//Simulating Delayed Data: Write an async function fetchDelayedData that returns a promise after a random delay
//(between 1 and 5 seconds). Use await to handle the result and log the data once it's resolved.

let delay = (Math.random() * (0.5 - 0.0) + 0.0) * 10000;

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetached successfully");
    }, delay);
  });
}

async function fetchDelayedData(params) {
  const result = await fetchData();
  console.log(result);
}

fetchDelayedData();
