//Handling Multiple Errors with Async-Await: Write an async function fetchUserProfile that fetches user data.
//Simulate both a successful fetch and a failed fetch (e.g., a 404 error) in separate await calls. Use try-catch
//to handle both successes and errors.

// Simulate a successful user fetch
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 2000);
  });
}

// Simulate a failed fetch (e.g., user not found)
function fetchUserSettings() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("404: User settings not found"));
    }, 1500);
  });
}

// Async function to fetch and handle both operations
async function fetchUserProfile() {
  try {
    const user = await fetchUser();
    console.log("User data:", user);
  } catch (err) {
    console.error("Failed to fetch user:", err.message);
  }

  try {
    const settings = await fetchUserSettings();
    console.log("User settings:", settings);
  } catch (err) {
    console.error("Failed to fetch settings:", err.message);
  }
}

fetchUserProfile();
