//Use Math.max with apply() to find the largest number in an array.

const numbers = [1, 4, 2, 8];

const result = Math.max.apply(null, numbers);
console.log(result);
//The apply() method allows you to call a function with a specific this value and an
//array (or array-like object) of arguments.

//We use apply() (or spread) when we don't know the exact number of elements in advance.
// As we cant pass like Math.max(numbers), we either have to use spread operator or use apply
