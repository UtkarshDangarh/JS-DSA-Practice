//Merging Objects: Write a function mergeobjects that takes two objects and merges them into a single object
//using the spread operator. Test the function with objects that have both unique and overlapping properties.

function mergeObject(obj1, obj2) {
  let mergedObj = { ...obj1, ...obj2 };
  return mergedObj;
}

let first = {
  firstName: "Utkarsh",
  lastName: "Dangarh",
  age: 25,
};

let second = {
  profession: "Software Developer",
  age: 26, //This will override the first object's age property
};

const third = mergeObject(first, second);

console.log(third);
