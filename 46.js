//Recursive Closure: Write a recursive function factorial that uses a closure to store previously
// computed values (memoization) for faster computation.

function createFactorial() {
  let cache = {}; //initializing a cache object, It's private due to closure

  function factorial(n) {
    // Checking Cache: If n is already computed, return the stored value.
    if (n in cache) {
      return cache[n]; //this returns cached result if available
    }
    // Base Case for recurson: factorial(0) = factorial(1) = 1.
    if (n === 0 || n === 1) {
      return 1;
    }

    cache[n] = n * factorial(n - 1); //Compute Factorial Recursively, then store it in cache.
    return cache[n];
  }
  return factorial; //hence we are returning the factorial function this will have access to cache (Closure)
}

const fact = createFactorial();

console.log(fact(3));
console.log(fact(5));
console.log(fact(6));
console.log(fact(7));
console.log(fact(8));

// cache is private due to closure and stores computed factorial values.

// Compute Factorial Recursively: n * factorial(n - 1), then store it in cache.
// Return factorial function.
// Keeping cache alive using a closure.
