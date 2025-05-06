//Convert a function that uses call() to use apply() instead. For example, a function that logs a full
//name with first name and last name.

//On Object we can ue it directly
// function logName() {
//   console.log(this.firstname + " " + this.lastName);
// }

// let obj1 = {
//   firstname: "East",
//   lastName: "Cost",
// };

// logName.apply(obj1);

function logFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
//In most cases we are not using call, apply on object we should put reference to this as null
// logFullName.call(null, "John", "Cena");

logFullName.apply(null, ["Skyler", "White"]);
