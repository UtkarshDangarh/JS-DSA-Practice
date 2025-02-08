//Recursive Closure: Write a recursive function factorial that uses a closure to store previously
// computed values (memoization) for faster computation.

function createFactorial() {
  let cache = {};

  function factorial(n) {
    if (n in cache) {
      return cache[n]; //this returns cached result if available
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    cache[n] = n * factorial(n - 1); //this stores result in cache
    return cache[n];
  }
  return factorial;
}

const fact = createFactorial();

console.log(fact(3));
console.log(fact(5));
console.log(fact(6));
console.log(fact(7));
console.log(fact(8));

// createFactorial() initializes a cache object inside it.

// cache is private due to closure and stores computed factorial values.

// Base Case: factorial(0) = factorial(1) = 1.
// Check Cache: If n is already computed, return the stored value.
// Compute Factorial Recursively: n * factorial(n - 1), then store it in cache.
// Return factorial function.
// Keeping cache alive using a closure.
