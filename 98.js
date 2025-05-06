//Write a function that capitalizes the first letter of each word in a given string.

str = "it is a good day!";

function firstLetterCapatilize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(firstLetterCapatilize(str));
