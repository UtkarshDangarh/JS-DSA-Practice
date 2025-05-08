//Fetching Multiple Data Sources Sequentially: Write an async function getMultipleData that simulates fetching
//data from two different sources, one after another. Use await to wait for each fetch to complete, then return
//the combined data.

// Simulate fetching from source 1
function fetchSource1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ source1: "Data from Source 1" });
    }, 2000); // 2-second delay
  });
}

// Simulate fetching from source 2
function fetchSource2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ source2: "Data from Source 2" });
    }, 1500); // 1.5-second delay
  });
}

// Async function to fetch both sequentially
async function getMultipleData() {
  const data1 = await fetchSource1();
  const data2 = await fetchSource2();

  const combined = { ...data1, ...data2 };
  return combined;
}

getMultipleData().then((result) => {
  console.log("Combined Data:", result);
});
//To avoid using .then we can use await for getMultipleData function inside another function
