//Simple Callback Function: Write a function processData that takes two arguments: a data string and a callback
//function. processData should call the callback function with the data string in uppercase. Test it by passing
//a callback that logs the result.

function processData(str, callback) {
  upperCaseData = str.toUpperCase();
  callback(upperCaseData);
}

//Callback function that logs the result
function logData(result) {
  console.log(`Processed Data: ${result}`);
}

processData("goku", logData);

// Anonymous Callback approach
// processData("goku", (result) => console.log(`Processed Data: ${result}`));
