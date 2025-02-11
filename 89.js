//Error Handling with Callback: Modify the fetchData function to add an error scenario. Pass a second argument
// (an error callback) that logs "Error fetching data" if an error occurs (e.g., a 50% chance of success).

function fetchData(success, err) {
  setTimeout(() => {
    const isSuccess = Math.random() < 0.5;
    if (isSuccess) {
      success();
    } else {
      err();
    }
  }, 2000);
}

function gettingData() {
  console.log(`Success : Data fetched from server`);
}
function HandelErr() {
  console.log(`Error: Error fetching data from server`);
}

fetchData(gettingData, HandelErr);
