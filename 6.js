//Write a function with default parameters (Hello, World!).
function greet(name = "Hello", message = "World!") {
  console.log(`${name}, ${message}`);
}

// Calling the function with default parameters
greet();

// Calling the function with one parameter, using one default
greet("Greetings");

// Calling the function with both parameters provided
greet("Hi", "Earth");

//Function with default parameters will use the default values as arguments if no arguments are passed in function by user.
