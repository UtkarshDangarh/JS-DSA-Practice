//Synchronously reading a file
const fs = require("fs");

function readFileSyncExample() {
  try {
    const data = fs.readFileSync("example.txt", "utf8"); // Reads file synchronously
    console.log("File Contents:\n", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

// Call the function
readFileSyncExample();

//Asynchronously reading a file

const fs = require("fs");

function readFileAsyncExample() {
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      return;
    }
    console.log("File Contents:\n", data);
  });
}

// Call the function
readFileAsyncExample();
