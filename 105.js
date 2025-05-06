//Create a function that multiplies all arguments and logs the result. Use apply() to pass an array of numbers
//dynamically.

function multiply() {
  let product = 1;
  for (let i = 1; i <= arguments.length; i++) {
    product = product * i;
  }
  return product;
}

//n this function, we didn’t define any parameters like multiplyAll(a, b, c) — but we can still access the
//passed values using the special arguments object.

//What is arguments?
//arguments is a built-in, array-like object available inside all regular functions (not arrow functions).
//It contains all arguments passed to the function, even if function doesn't explicitly declare any parameters.

nums = [1, 2, 3];
let result = multiply.apply(null, nums);
console.log(result);
