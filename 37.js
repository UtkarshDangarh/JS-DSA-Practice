//Lexical Scope and Nested Functions: Write a function outer that defines a variable message with a
//string of your choice. Inside outer, define another function inner that logs message. Call inner
//inside outer to test if inner can access message.

function outer() {
  let message = "Hello World!";
  function inner() {
    console.log(message);
  }
  inner();
}

outer();
