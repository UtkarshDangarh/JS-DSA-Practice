//Write a function greet that logs "Hello, my name is {name}". Use call() to invoke it with different objects.

function greet(place) {
  console.log(
    `Hello my name is ${this.fullName} , I'm ${this.age} years old & I'm from ${place}`
  );
}

const user = {
  fullName: "Walter White",
  age: 51,
};

const user2 = {
  fullName: "Tony Stark",
  age: 45,
};

greet.call(user, "Dehradun");
greet.call(user2, "New york");
//First argument in call will be the object on which we've to call the greet method and 2nd one is
//the argument that greet function takes
