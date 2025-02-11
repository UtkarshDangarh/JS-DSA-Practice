//Callback with Delay: Write a function fetchData that simulates fetching data from a server. Use setTimeout
//to delay the call by 2 seconds. Pass a callback to fetchData that logs "Data fetched!" when called.

function fetchData(callback) {
  setTimeout(callback, 2000);
}

function gettingData() {
  console.log("Data Fetched from server");
}

fetchData(gettingData);
//Can not call the callback inside the setTimeout function as it'll immediately executes and and setTimeout gets
// whatever callback() returns (which is usually undefined).
//Either Pass the function reference or call it inside an anonymous function or call inside the arrow function
