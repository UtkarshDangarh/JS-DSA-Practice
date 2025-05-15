//Handling Multiple Async Calls Concurrently: Write an async function getDataConcurrently that fetches data from
//multiple endpoints concurrently using await & Promise.all(). Once all data is fetched, return & log the results.

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/todos/1",
];

async function getDataConcurrently(urls) {
  try {
    //Creating an array of fetch Promises
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => {
        //response.ok s a boolean value. It's true if the HTTP status code is in the range 200–299.
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.status}`);
        }
        return response.json();
      })
    );

    //Await all Promises concurrently using Promise.all
    const results = await Promise.all(fetchPromises);

    //Logging and returning the results
    console.log("Fetched data:", results);
    return results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // re-throw the error if needed
  }
}

getDataConcurrently(urls);
