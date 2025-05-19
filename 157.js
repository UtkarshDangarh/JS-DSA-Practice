//Implement a function that flattens a nested array into a single-dimensional array.
const arr = [1, 9, [3, 5, 1], [12, 7], 5, [9, 0, 4, 8], [6]];

// let flatten = [];
//Approach 1: Brute force aproach
// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     flatten.push(...arr[i]);
//   } else {
//     flatten.push(arr[i]);
//   }
// }

// console.log(flatten);

//Approach 2: Using Recursoin
// function flat(arr) {
//   let flatten = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flatten = flatten.concat(flat(arr[i]));
//     } else {
//       flatten.push(arr[i]);
//     }
//   }
//   //Can not console.log flatten as the functionlogs partial results at every recursive level. But since you are no
//   //longer returning result, the recursion breaks.
//   //Use return to make recursion work.
//   return flatten;
// }

// console.log(flat(arr));

//Approach 3: Use reduce() + recursion

// function flat(arr) {
//   return arr.reduce(
//     //this  implicitly return the final vlaue of acc, if using {} we need to explicitly return it
//     (acc, crr) => acc.concat(Array.isArray(crr) ? flat(crr) : crr),
//     []
//   );
// }

// console.log(flat(arr));

//Approach 4: Array.prototype.flat()

console.log(arr.flat());
//If there are nested array inside nested array pass Infinity in flat(Infinity) to flat the array
