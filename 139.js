//Async Function with Multiple Parameters: Write an async function calculateTotal that takes two numbers, fetches
//some data asynchronously, and then returns the sum of the two numbers and the fetched data. Use await to
//simulate the asynchronous data fetching.

function fetchExtraData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10); // Simulated fetched data
    }, 2000); // 2-second delay
  });
}

async function calculateTotal(a, b) {
  const response = await fetchExtraData();
  const total = a + b + response;
  console.log(total);
}

calculateTotal(5, 5);
