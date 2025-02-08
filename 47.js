//Variable Hoisting and Temporal Dead Zone (TDZ): Write code that declares a variable x using let
// and initializes it after logging it. Observe the behavior to understand the temporal dead zone
// and contrast this with how var behaves.

// console.log(x); //This will give reference error, x cannot be accessed before initiaalization
// let x = 1;

console.log(y); //This will log undefined because of temporal dead zone
var y = 1;
