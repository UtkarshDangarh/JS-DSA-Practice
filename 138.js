//Async-Await with Promises: Write a function getDataAsync that fetches data asynchronously using async and await
//Simulate a 2-second delay by returning a promise that resolves with data. Use await to wait for the promise to
//resolve and log the result.

async function getDataAsync() {
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data Fetched Successfully");
      }, 2000);
    });
  }

  const data = await fetchData();
  console.log(data);
}

getDataAsync();
