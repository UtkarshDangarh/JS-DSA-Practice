//Timeout Simulation with Async-Await: Write an async function fetchWithTimeout that simulates fetching data with
//a 5-second delay. If the operation exceeds 4 seconds, reject the promise with a "Timeout" error. Use async/awai
//and try-catch to handle both success and failure.

// Simulate the actual fetch (takes 5 seconds)
function simulatedFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data successfully!");
    }, 5000); // 5 seconds
  });
}

// Timeout promise (rejects after 4 seconds)
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
    }, ms);
  });
}

// Async function using Promise.race to simulate timeout
async function fetchWithTimeout() {
  try {
    const result = await Promise.race([simulatedFetch(), timeout(4000)]);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the function
fetchWithTimeout();
