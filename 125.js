//Chaining Multiple Asynchronous Tasks: Write a function fetchAndProcessbata that first fetches user data from an
//API (simulate it with a promise), then processes the data (e.g., adding a field). Chain promises to handle both
//tasks and log the result at the end.

// Step 1: Simulate fetching data from an API
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = {
        id: 1,
        name: "Skyler",
        age: 47,
      };
      console.log("Fetched user data.");
      resolve(userData);
    }, 1000); // Simulate 1 second network delay
  });
}

// Step 2: Process the data (e.g., add a new field)
function processUserData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.isActive = true; // Add a new field
      console.log("Processed user data.");
      resolve(data);
    }, 1000); // Simulate processing delay
  });
}

// Step 3: Chain the tasks
function fetchAndProcessData() {
  fetchUserData()
    .then(processUserData) //here the result of fetchUserData promise is automatically passed as an argument to processUserData.
    .then((finalData) => {
      console.log("Final Result:", finalData);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

fetchAndProcessData();
