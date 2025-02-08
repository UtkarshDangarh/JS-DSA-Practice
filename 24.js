//Given an array of objects representing people, each with name and age,
//write a function that returns an array of names of people who are over 18.

let persons = [
  {
    name: "Alice Johnson",
    age: 30,
    address: {
      street: "123 Elm St",
      city: "Metropolis",
      country: "USA",
    },
  },
  {
    name: "Bob Smith",
    age: 25,
    address: {
      street: "456 Pine Rd",
      city: "Gotham",
      country: "USA",
    },
  },
  {
    name: "Charlie Brown",
    age: 35,
    address: {
      street: "789 Oak Ave",
      city: "Smallville",
      country: "USA",
    },
  },
  {
    name: "Charlie Red",
    age: 17,
    address: {
      street: "789 Oak Ave",
      city: "Indore",
      country: "India",
    },
  },
];

function eighteenPlus(list) {
  let aboveEighteen = list.filter((person) => person.age > 18);
  console.log(aboveEighteen);
}
eighteenPlus(persons);
