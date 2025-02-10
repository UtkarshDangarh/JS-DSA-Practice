//Filtering Strings Longer than 3 Characters: Write a function filterLongStrings that takes an array of
//strings and returns a new array containing only the strings with more than 3 characters using filter

const strs = [
  "Al",
  "Bob",
  "Charlie",
  "De",
  "Eve",
  "Zo",
  "Kai",
  "Mia",
  "Li",
  "No",
];

function filterLongStrings(arr) {
  const longStrings = arr.filter((str) => str.length >= 3);
  return longStrings;
}

console.log(filterLongStrings(strs));
