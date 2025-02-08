//Rename a File: Write a program that renames oldFile.txt to newFile.txt.

let fs = require("fs");

fs.rename("renamedFIle", "renamedFile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed");
});
