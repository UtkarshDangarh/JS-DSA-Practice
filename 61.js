//Filtering Adult Users: Write a function filterAdults that takes an array of user objects
//(each with an age property) and returns an array of users who alp 18 years or older.

const users = [
  { name: "Snandeep", age: 33 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 14 },
  { name: "David", age: 18 },
  { name: "Eve", age: 15 },
];

function filterAdults(arr) {
  let adults = arr.filter((user) => user.age >= 18);
  return adults;
}

const adults = filterAdults(users);
console.log(adults);
