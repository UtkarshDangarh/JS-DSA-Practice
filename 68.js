//Displaying User Information: Write a function displayuserInfo that takes a name as the first argument,
//followed by any number of hobby strings as the rest of the arguments. The function should log the name
//and all hobbies to the console.

function displayuserInfo(name, ...hobbies) {
  //   console.log(name, ...hobbies);
  console.log(`Name: ${name}`);
  console.log(
    `Hobbies:  ${
      hobbies.length > 0 ? hobbies.join(", ") : "No Hobbies Provided"
    }`
  );
}

displayuserInfo(
  "Goku",
  "Martial Arts",
  "Free Style Fighting",
  "Strength Training",
  "Eating",
  "Sleeping"
);
