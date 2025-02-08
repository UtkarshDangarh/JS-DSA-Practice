//Delete a File: Create a program that deletes a file called temp.txt. If the file doesn’t exist, it should log an error message.

const { error } = require("console");
let fs = require("fs");

fs.unlink("temp.txt", function (err) {
  if (err) throw error;
  console.log("File Deleted");
});
