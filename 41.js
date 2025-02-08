//Shadowing Variables: Create a variable color with the value "blue" in the global scope. Write a function
//setColor that defines a variable color with the value "red" and logs it. Call setColor and then
//log the global color variable to see how variable shadowing works.

let color = "blue";

function setColor() {
  let color = "red";
  console.log(color);
}

setColor();
console.log(color);
