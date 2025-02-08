//Write a function that takes an object, converts it into an array of key-value pairs, and then reconstructs it back into an object.

function convertAndReconstruct(obj) {
  // Step 1: Convert object to array of key-value pairs
  const keyValuePairs = Object.entries(obj);

  // Log to see the intermediate step
  console.log("Array of key-value pairs:", keyValuePairs);

  // Step 2: Reconstruct the object from the array
  const reconstructedObj = Object.fromEntries(keyValuePairs);

  return reconstructedObj;
}

// Example usage
let originalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "swimming"],
};

let result = convertAndReconstruct(originalObject);

console.log("Original Object:", originalObject);
console.log("Reconstructed Object:", result);
