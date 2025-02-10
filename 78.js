//Simple Callback Function: Write a function processData that takes two arguments: a data string and a
//callback function. processData should call the callback function with the data string in uppercase.
//Test it by passing a callback that logs the result.

function processData(str, cb) {
  cb = () => {
    console.log(str.toUpperCase());
  };
  cb();
}

processData("goku");
