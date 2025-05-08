//(Simulate a file read) Write a function readFile that simulates reading a file. The promise should resolve with
//the file content ( "File content"") after 2 seconds, or reject with an error ("File not found"") if the file is
//not avallable.

function readFile(isFileAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFileAvailable) {
        resolve("File content");
      } else {
        reject("File not found");
      }
    }, 2000);
  });
}

readFile(true)
  .then((content) => {
    console.log("Success:", content);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
