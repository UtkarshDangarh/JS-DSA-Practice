//Implement a Basic map Function with Callbacks: Write a function mapArray that takes an array and a callback
//function. It should return a new array where each element is transformed by the callback function, similar
//to the behavior of the built-in Array.prototype.map() method.

function mapArray(arr, cb) {
  let transformed = [];
  //   arr.forEach((element) => {
  //     transformed.push(cb(arr[element], emen, arr));
  //   });

  for (let i = 0; i < arr.length; i++) {
    transformed.push(cb(arr[i], i, arr)); // Passing index (i) and the whole array (arr) for cases where it
    // require access to the whoole array, for most of the cases the value (arr[i]) is enough
  }
  return transformed;
}

console.log(mapArray([1, 2, 3, 4], (num) => num * 2));
