//Sequential Execution of Promises: Write an async function processTasks that executes two tasks sequentially,
//each with a 2-second delay. Use await to ensure that the first task completes before starting the second one.
//Log the result of each task after completion.

// Simulate Task 1
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 2000); // 2-second delay
  });
}

// Simulate Task 2
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 completed");
    }, 2000); // 2-second delay
  });
}

// Async function to run tasks sequentially
async function processTasks() {
  const result1 = await task1();
  console.log(result1); // Logs after 2 seconds

  const result2 = await task2();
  console.log(result2); // Logs after another 2 seconds
}

// Call the function
processTasks();
