//Simulating API Calls with Promises: Write a function fetchData that simulates an API call by returning a
//promise that resolves after 3 seconds with some mock data (e.g., data: 'some data" )). Test it using .then()
//to log the result when the promise is resolved.

function fetchData() {
  return new Promise((resolve, reject) => {
    const data = "Data Fetched";
    if (data) {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    } else {
      reject("Error while fetching the data");
    }
  });
}

fetchData().then((value) => console.log(value));
