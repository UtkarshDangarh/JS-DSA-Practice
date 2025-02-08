//Lexical Environment with Closures: Write a function createFunction that defines a variable greeting
//set to "Hi". Inside it, define and return a function displayGreeting that logs greeting. After calling
//createFunction, assign the returned function to a variable and call it later to see if it retains
//access to greeting.

function createFunction() {
  let greeting = "Hi";
  return function displayGreeting() {
    console.log(greeting);
  };
}

let greet = createFunction(); // greet now holds displayGreeting function

greet();
