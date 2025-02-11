//Handling Multiple Callbacks: Write a function getUserData that simulates fetching user data(e.g., name and age).
// The function should take a callback to handle the successful result
// (logging "User data received!" and the data) and an error callback for handling failure
// (logging "Failed to fetch user data").

function getUserData(user, cb1, cb2) {
  return user ? cb1(user) : cb2("Error Fetching User");
}

function success(user) {
  return `User Details Received: Name: ${user.name} Age: ${user.age}`;
}

function handelErr(err) {
  return age;
}

console.log(getUserData({ name: "Goku", age: 45 }, success, handelErr));
