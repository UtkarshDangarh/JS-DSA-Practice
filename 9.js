//Implement a function that takes a number and returns its factorial (e.g., factorial(5) should return 120).
//Solve it with recursion also
//Brute Force Approach
function factorial(num) {
  var ans = 1;
  for (i = num; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
}

console.log(factorial(8));

//Recursion
function fact(i) {
  if (i === 0) {
    return 1;
  }
  return i * fact(i - 1);
}

console.log(fact(5));

//Explanation
// if (i === 0) { return 1; }:
// This is the base case for the recursion. If i is 0, the function returns 1. This is because the factorial of 0 (by definition) is 1. This condition stops the recursion from going indefinitely deeper.

// 3. Recursive Case:
// return i * fact(i - 1);
// If i is not zero, the function enters this part:
// It multiplies i by fact(i - 1):
// fact(i - 1) is a recursive call to itself with the argument decreased by 1. This means the function calls itself with i - 1 until it hits the base case.
// The multiplication happens after the recursive call returns, effectively building up the factorial from smaller numbers to the original i.

// How It Works Step-by-Step:
// Example with i = 3:
// fact(3):
// Since 3 is not 0, it goes to the recursive case:
// 3 * fact(2)
// fact(2):
// Again, not 0, so:
// 2 * fact(1)
// fact(1):
// Still not 0:
// 1 * fact(0)
// fact(0):
// Here, i === 0, so it returns 1.
// Now, unwinding:
// fact(1) returns 1 * 1 which is 1
// fact(2) returns 2 * 1 which is 2
// fact(3) returns 3 * 2 which is 6
