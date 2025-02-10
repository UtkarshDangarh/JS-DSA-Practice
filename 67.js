//Copying Objects: Write a function copyObject that takes an object and returns a new object that is a copy of
//the input object using the spread operator. Modify one property in the copied object to verify that the
//original object is not affected.

function copyObject(obj) {
  const newObj = { ...obj };
  newObj.name = "Shreya";
  return newObj;

  //   return {...obj} // Can also write the code in this manner
}

let obj = { name: "Snandeep", age: "17", grade: 80 };

console.log(copyObject(obj));
console.log("Original Object", obj);
//{ ...obj } creates a shallow copy of the obj, meaning that primitive values (like name, age, city) are copied.
//Changing copied.age does not affect original.age, proving that the original object remains unchanged.

//Shallow copies only retain references for nested objects, arrays, or non-primitive values.
//Primitive values (like numbers, strings, booleans) are copied by value, meaning they exist independently in the new object.

// Primitive values (numbers, strings, booleans) are copied by value, so modifying them in the copied object does NOT affect the original.
//Objects and arrays are copied by reference in a shallow copy, meaning modifications in the copied object will affect the original.
