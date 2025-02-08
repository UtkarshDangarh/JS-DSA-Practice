//Write a function greet that defines a variable greeting with the value "Hello".
//Inside the function, define another function sayHello that logs the value of greeting. Call sayHello inside greet to see if it can access greeting.

function greet() {
  let greeting = "Hello";

  function sayHello() {
    console.log(greeting);
  }
  sayHello();
}

greet();
