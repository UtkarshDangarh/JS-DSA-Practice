//Dynamic Scoping Simulation: JavaScript uses lexical scoping, but simulate dynamic scoping by passing
// a variable as a parameter to multiple functions, each modifying it in some way, and then logging the
// final result. Note how lexical scoping doesn’t allow this natively.

function first(value) {
  value += 10;
  second(value);
}

function second(value) {
  value *= 2;
  third(value);
}

function third(value) {
  //   console.log(`Final Value is ${value}`);
  value += 20;
  fourth(value);
}

function fourth(value) {
  console.log(`Final Value is ${value}`);
}

first(5);
