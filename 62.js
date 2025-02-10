//Extracting Property Values: Write a function getNames that takes an array of objects
//(each with a name property) and returns an array of names using map

const users = [
  { name: "Snandeep", age: "17", grade: 80 },
  { name: "Bob", age: 16, grade: 70 },
  { name: "Charlie", age: 14, grade: 92 },
  { name: "David", age: 17, grade: 88 },
  { name: "Eve", age: 15, grade: 75 },
];

function getNames(arr) {
  let names = arr.map((user) => user.name);
  return names;
}

let nameOnly = getNames(users);
console.log(nameOnly);
