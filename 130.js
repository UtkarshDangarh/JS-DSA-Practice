//Handling Errors with Try-Catch: Write an async function fetchData that returns a promise after a 3-second delay.
//If the data is successfully fetched, return the data; otherwise, simulate an error by rejecting the promise.
//Use a try-catch block to handle any errors and log them.

async function fetchData() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success or failure randomly
        const isSuccess = Math.random() > 0.3; // 70% chance of success
        if (isSuccess) {
          resolve({ id: 1, content: "Sample Data" });
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 3000);
    });

    console.log("Data fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw if you want calling code to handle it too
  }
}

fetchData()
  .then((result) => console.log("Result:", result))
  .catch((err) => console.log("Caught in caller:", err.message));
