//Promise with Reject: Write a function getuserData that returns a promise. If the user data is not found
//(e.g., if the user id is invalid), the promise should reject with an error message like "User not found"
//Handle the error with catch ()

function getUserData(userID) {
  return new Promise((resolve, reject) => {
    const users = {
      1: { name: "Alice", age: 25 },
      2: { name: "Bob", age: 28 },
    };
    setTimeout(() => {
      if (users[userID]) {
        resolve(users[userID]);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

getUserData(1)
  .then((value) => {
    console.log("Resolved:", value);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// getUserData(5)
//   .then((value) => {
//     console.log("Resolved:", value);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });
