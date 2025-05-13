//Simulating API Calls with Async-Await: Write an async function callApi that simulates an API call by returning
//a promise that resolves after 3 seconds with some mock data. Use await to wait for the result and log the mock
//data.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched Successfully");
    }, 3000);
  });
}

async function callApi() {
  const data = await fetchData();
  console.log(data);
}

callApi();
