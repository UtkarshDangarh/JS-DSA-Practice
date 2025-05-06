//Given an array of strings, write a function that returns an object where the keys are unique strings
//from the array, and the values are the number of times each string appears.

const names = [
  "alice",
  "bob",
  "charlie",
  "alice",
  "david",
  "emma",
  "bob",
  "grace",
  "henry",
  "emma",
  "isla",
  "jack",
  "charlie",
  "david",
];

//Using for loop
// function countStrings(names) {
//   const result = {};

//   for (const str of names) {
//     result[str] = (result[str] || 0) + 1;
//   }

//   return result;
// }

//Using Reduce
function occurance(arr) {
  return arr.reduce((acc, crr) => {
    acc[crr] = (acc[crr] || 0) + 1;
    return acc;
  }, {});
}

console.log(occurance(names));
