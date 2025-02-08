//Write a program that swaps two variables without using a third variable.

function swap(num1, num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  console.log("After swap: num1 =", num1, ", num2 =", num2);
}

swap(5, 10);
// First, we add a and b and store the result back in a. Now a holds the sum of both numbers.
// Then, we subtract the new a (which contains a + b) by b to get the original value of a, which we store in b. Now b has the original value of a.
// Finally, we subtract the new b (which now holds the original a) from a (which is a + b) to get the original value of b back into a.

// Swap using XOR
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
