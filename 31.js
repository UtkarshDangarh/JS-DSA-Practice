//Create a for loop that iterates 3 times. Inside the loop, declare a variable counter using let and
// set it to the loop index. Log counter inside the loop, then
// try logging counter outside the loop and note the result. Repeat this with var to observe the difference.

// for (let i = 0; i < 3; i++) {
//   let counter = i;
//   console.log(counter);
// }
//this will not print and will give reference error as let and const are block scoped
// console.log(counter);

for (let i = 0; i < 3; i++) {
  var counter2 = i;
  console.log(counter2);
}

// this will print the last value set to counter2 varibale i.e. 2
console.log(counter2);
