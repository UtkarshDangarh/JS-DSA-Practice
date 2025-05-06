//Use destructuring to extract values from an object and an array.

var person = {
  firstName: "Utkarsh",
  age: 25,
  Job: "React Developer",
  address: { city: "Indore", State: "MP" },
};

//Printing all values from the object
// console.log(...person);

// Destructure properties from the object
const {
  firstName,
  age,
  address: { city },
} = person;

// Explanation:
// - `firstName`, `age`, and `email` are directly extracted from `person`
// - `city` is extracted from the nested `address` object

console.log(firstName); // Utkarsh
console.log(age); // 25
console.log(city); // Indore

var arr = ["Mango", "Oranges", "Banana", "Guvava"];

const [fruit1, fruit2, , fruit4] = arr;
console.log(fruit1);
console.log(fruit2);
console.log(fruit4);

// The comma with nothing before it ( ,) means we're skipping the third element ('Banana').
