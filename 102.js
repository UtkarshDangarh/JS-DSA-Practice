//Create a function sum(a, b, c) that returns the sum of three numbers. Use apply() to call it with an array
//of numbers.

//basic approach
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

// console.log(sum.apply(null, nums));

//Wrap sum inside another function
function withApply(fn, arr) {
  return fn.apply(null, nums);
}

//The null is being passed as the "this" value for the function being called — in this case, the sum function.
//The sum function is a regular function, not a method inside an object. The function doesn’t use this at all.
// Hence the value of this doesn’t matter.
//So, we can safely pass null (or even undefined) as the this context.
//JavaScript won’t care, because this is never used inside the function.

const result = withApply(sum, nums);
console.log(result);

// If we're using apply() in a non-object context (like in the global or non-method context), this will refer
// to the global object (window in browsers, or global in Node.js) when in non-strict mode. In strict mode,
// this will be undefined. hence we will not user "this" in place of null
