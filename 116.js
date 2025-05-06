//Basic Promise: Write a function getuser that returns a promise that resolves after 2 seconds with the user data
//(e.g., [ name: "John", age: 30 7). Use .then() to handle the resolved data and log the user information.

function getUser(user) {
  return new Promise((resolve, reject) => {
    if (user) {
      setTimeout(() => {
        resolve(user);
      }, 2000);
    } else {
      reject("Failed to get user data");
    }
  });
}

getUser({ name: "Utkarsh", age: "25" }).then((value) => {
  console.log("Resolved: ", value);
});
