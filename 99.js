//Write a function to deeply clone an object. Test it by creating a nested object, cloning it,
//and then modifying the original object to ensure the clone remains unaffected.

let obj1 = {
  firstName: "Walter",
  lastName: "White",
  address: { city: "Nowhere", zip: 12345 },
  hobbies: ["Cooking", "Math"],
};

function deepClone(obj) {
  //Handelling Null or non object type
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  let clonedObj = {};

  for (key in obj) {
    if (obj.hasOwnProperty) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

let ans = deepClone(obj1);

ans.firstName = "Jessie";
ans.lastName = "Pinkman";

console.log(ans);
