//Merge two  arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//Using spread operator
// const arr3 = [...arr1, ...arr2];

//Using concat()
// const arr3 = arr1.concat(arr2);

// console.log(arr3);

//Using array.push()
// for (i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1);

//Using Array.prototype.flat() (for nested arrays)
const merged = [arr1, arr2].flat();
// console.log(merged); // [1, 2, 3, 4, 5, 6]
