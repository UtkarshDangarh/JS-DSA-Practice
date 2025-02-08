//Write to a File Synchronously: Create a program that writes the string "Hello, World!" to a new file
//called hello.txt synchronously.

//Synchronously writing to a file
let fs = require("fs");

function writeToFile() {
  const content = "Hello, World!";
  fs.writeFileSync("hello.txt", content, "utf8"); // Synchronously writes to the file
  console.log("File written successfully!");
}

// Call the function
writeToFile();

//This will asynchronoursly write to a file
fs.appendFile("firstFile.txt", "Hello World", function (err) {
  if (err) {
    throw err;
  }
});

//fs.appendFile() method appends specified content to a file. If file does not exist, file will be created
