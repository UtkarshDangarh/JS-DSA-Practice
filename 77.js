//Write a function that capitalizes the first letter of each word in a given string.
const names = [
  "alice",
  "bob",
  "charlie",
  "david",
  "emma",
  "frank",
  "grace",
  "henry",
  "isla",
  "jack",
];

function capitalize(arr) {
  return arr.map((str) => str[0].toUpperCase() + str.slice(1));
}

console.log(capitalize(names));
