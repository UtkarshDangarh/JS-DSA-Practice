//Promise.resolve() and Promise.reject(): Write a function checkuserStatus that returns a resolved promise if the
//user is active and a rejected promise if the user is inactive, Use Promise. resolve() and Promise. reject() to
//create these promises and handle them with then() and .catch()

function checkUserStatus(user) {
  if (user.isActive) {
    return Promise.resolve(user.fullName); // Immediately returns a resolved promise
  } else {
    return Promise.reject("User is not Active"); // Immediately returns a rejected promise
  }
}

//Another way to do same thing without using promise.resolve and promise.reject
// function checkUserStatus(user) {
//   return new Promise((resolve, reject) => {
//     if (user.isActive) {
//       resolve(user.fullName);
//     } else {
//       reject("User is not Active");
//     }
//   });
// }

const user = {
  fullName: "Gus Fring",
  isActive: true,
};

checkUserStatus(user)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
