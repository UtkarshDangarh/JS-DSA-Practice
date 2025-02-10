//Calculate the Average Age: Write a function calculateAverageAge that takes an array of user objects
//(with age properties), filters out users who are under 18, and calculates the average age of the
//remaining users using reduce

const users = [
  { name: "Snandeep", age: 17 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 13 },
  { name: "David", age: 18 },
  { name: "Eve", age: 15 },
];

function calculateAverageAge(arr) {
  let underAge = arr.filter((user) => user.age < 18);
  let totalAge = underAge.reduce((acc, crr) => acc + crr.age, 0); //crr.age because crr is an object
  let avgAge = underAge.length > 0 ? totalAge / underAge.length : 0; // Prevent division by zero
  return avgAge;
}

// function calculateAverageAge(arr) {
//   let underAge = arr.filter((user) => user.age < 18);
//   let totalAge = underAge.reduce((acc, crr) => acc + crr.age, 0);
//   let avgAge = underAge.length > 0 ? totalAge / underAge.length : 0; // Prevent division by zero
//   return avgAge;
// }
console.log(calculateAverageAge(users));
