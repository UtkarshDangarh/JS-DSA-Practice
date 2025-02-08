//Write a function that takes two objects and returns a new object that merges properties of both.
//If a property exists in both objects, the value from the second object should override the first.

let obj1 = {
  name: "UD",
  gender: "Male",
  address: {
    city: "Garoth",
    state: "MP",
  },
};

//to deep clone a nested object
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

//in nested object we will use recursion and base condition will  check If the input obj is null or not an object, it returns obj as-is.

//To deepclone simple object
// function deepClone(obj) {
//   const clone = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty) {
//       clone[key] = obj[key];
//     }
//   }
//   return clone;
// }

let obj2 = deepClone(obj1);
console.log(obj2);

obj1.gender = "Indore";

console.log(obj2);
console.log(obj1);
