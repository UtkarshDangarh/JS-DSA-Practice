//Find the frequency of elements in array Using Reduce

const arr = [1, 2, 3, 4, 5, 4, 37, 5, 2, 7, 3, 4];

//Using Reduce
let ans = arr.reduce(function (acc, crr) {
  if (acc[crr]) {
    acc[crr] = ++acc[crr];
  } else {
    acc[crr] = 1;
  }
  return acc;
}, {});

console.log(ans);

//Using for loop
let occurance = {};
for (let i = 0; i < arr.length; i++) {
  let ele = arr[i];
  if (occurance[ele]) {
    occurance[ele] += 1;
  } else {
    //here assigning element as key and value as 1 in object
    occurance[ele] = 1;
  }
}
