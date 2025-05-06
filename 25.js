//Write a function that takes two objects and returns a new object that merges properties of both.
// If a property exists in both objects, the value from the second object should override the first.

//using object.assign
const person = {
  name: "Jack",
  age: 26,
  gender: "Female",
};

const student = {
  gender: "male",
};
const newObj = Object.assign(person, student);

console.log(newObj);

// Using spread operator
// The spread operator creates a new object with all properties from obj1 and then override or add properties from obj2

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Example usage:
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 30, d: 4 };

let result = mergeObjects(obj1, obj2);
console.log(result);
