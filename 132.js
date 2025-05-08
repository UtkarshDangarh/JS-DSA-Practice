//Using Promise.all() with Async-Await: Write an async function fetchAllData that simulates fetching multiple
//pieces of data using Promise.all(). Return the data from all fetches simultaneously and log the result.

// Simulate fetching data from source 1
function fetchSource1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Source 1");
    }, 2000);
  });
}

// Simulate fetching data from source 2
function fetchSource2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Source 2");
    }, 1500);
  });
}

// Simulate fetching data from source 3
function fetchSource3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Source 3");
    }, 1000);
  });
}

// Async function using Promise.all
async function fetchAllData() {
  try {
    const results = await Promise.all([
      fetchSource1(),
      fetchSource2(),
      fetchSource3(),
    ]);

    console.log("All data fetched:", results);
    return results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchAllData();
