//ANother Promise Example

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("✅ You are an adult.");
    } else {
      reject("🚫 You are underage.");
    }
  });
}

checkAge(20)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
