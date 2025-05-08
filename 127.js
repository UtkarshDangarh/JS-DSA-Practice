//Promise with Conditional Resolve/Reject: Write a function checkuserEligibility that takes a userAge as a
//parameter and returns: promise. If the userAge is 18 or older, the promise should resolve with "Eligible"
//If the userAge is less than 18, the promise should reject with Not eligible"

function checkuserEligibility(userAge) {
  return new Promise((resolve, reject) => {
    if (userAge >= 18) {
      resolve("Eligible");
    } else {
      reject("Not Eligible");
    }
  });
}

checkuserEligibility(22)
  .then((value) => {
    console.log(value);
  })
  .catch((value) => console.log(value));
