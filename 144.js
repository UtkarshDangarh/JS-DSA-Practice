//Polling with Async-Await: Write an async function pollUntilResolved that simulates a task that resolves after a
//random number of attempts. Use await to poll the task every 2 seconds until it resolves or a maximum of 5
//attempts.

function simulateTask() {
  // Simulate a task that randomly succeeds (returns true or false)
  return Math.random() > 0.7; // 30% chance to succeed
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function pollUntilResolved() {
  const maxAttempts = 5;
  let attempt = 0;

  while (attempt < maxAttempts) {
    attempt++;
    console.log(`Attempt ${attempt}: Checking...`);

    const isResolved = simulateTask();

    if (isResolved) {
      console.log("✅ Task resolved!");
      return "Resolved";
    }

    if (attempt < maxAttempts) {
      console.log("❌ Not resolved yet. Waiting 2 seconds...");
      await wait(2000); // wait 2 seconds before next attempt
    }
  }

  console.log("⛔ Maximum attempts reached. Task not resolved.");
  return "Failed";
}

pollUntilResolved().then((result) => {
  console.log("Result:", result);
});
