//Private Variables with Closure: Create a function secretHolder that takes a string as an argument (secret).
//This function should return an object with two methods: getSecret and setSecret. getSecret should return
//the secret, and setSecret should allow updating the secret. Ensure that the secret variable is private
//and only accessible through these methods.

function secretHolder(secret) {
  let obj = {
    getSecret: function () {
      return secret;
    },
    setSecret: function (message) {
      return (secret = message);
    },
  };
  return obj;
}

let secretMessage = secretHolder("Hello");

// console.log(secretMessage.getSecret());
secretMessage.setSecret("Bye");
console.log(secretMessage.getSecret());
