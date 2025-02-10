//Use destructuring to extract values from an object and an array.

var person = {
  name: "Utkarsh",
  age: 25,
  Job: "React Developer",
  address: { city: "Indore", State: "MP" },
};

//Printing all values from the object
// console.log(...person);

// Destructure properties from the object
const {
  name,
  age,
  address: { city },
} = person;

// Explanation:
// - `name`, `age`, and `email` are directly extracted from `person`
// - `city` is extracted from the nested `address` object

console.log(name); // Alice
console.log(age); // 30
console.log(city); // Wonderland

var arr = ["Mango", "Oranges", "Banana", "Guvava"];

const [fruit1, fruit2, , fruit4] = arr;
console.log(fruit1);
console.log(fruit2);
console.log(fruit4);

// The comma with nothing before it ( ,) means we're skipping the third element ('Banana').
