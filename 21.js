//Write a function that takes an object and logs each property key and value in the format key: value. Use a for...in loop.

function objectProperties(obj) {
  for (let x in obj) {
    if (obj.hasOwnProperty(x)) {
      console.log(`${x} : ${obj[x]}`);
    }
    //If condition hasOwnProperty is used to ensure we only log properties that belong
    // directly to the object and not those inherited through the prototype chain.
    // console.log(`${x} : ${obj[x]}`);
  }

  // The loop will iterate over each property of obj, and x will represent each property name (key).
  // When accessing the value associated with x, you use obj[x].
}

let exampleObj = {
  name: "UD",
  age: 25,
};

objectProperties(exampleObj);

//Second approach
// Using for...of with Object.entries()
// This approach combines Object.entries() with the more modern for...of loop syntax:

// function logObjectProperties(obj) {
//   for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
//   }
// }

// // Example usage
// let exampleObject = { name: "Alice", age: 30, city: "Wonderland" };
// logObjectProperties(exampleObject);
