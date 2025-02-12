//Callback with Array of Objects: Write a function processUsers that takes an array of user objects
//(each having name and age properties) and a callback. The function should iterate over the array and call the
//callback for each user. The callback should log the user’s name and age.

function processUsers(arr, cb) {
  arr.map((user) => cb(user));
}

function logUserData(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const users = [
  { name: "Snandeep", age: 17 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 13 },
  { name: "David", age: 18 },
  { name: "Eve", age: 15 },
];

processUsers(users, logUserData);
