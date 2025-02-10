//Counting Occurrences: Write a function countoccurrences that takes an array of strings and returns an object
// with the count of each string's occurrences. Use reduce to accomplish this.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countOccurrences(arr) {
  return arr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc; //The updated accumulator object is returned to the next iteration.
  }, {});
}

console.log(countOccurrences(fruits));

// acc will start as an empty object and will store key value pair of fruit and it's occurance
// fruit represent the current value in each iteration

//acc[fruit] = (acc[fruit] || 0) + 1;

//acc[fruit] This accesses the current count of the fruit in the accumulator object (acc).
// If the fruit already exists, it retrieves its current count.
// If the fruit does not exist yet, it returns undefined.

// (acc[fruit] || 0) + 1 // This ensure the fruit count starts from 0+1
// acc[fruit] → this checks if the fruit already has a count in acc (the object storing counts)
// if it's not in there then it returns undefined  and the other condition of logical or will run.
// || 0 → If the fruit is not in acc yet, it gives it a starting value of 0.
//  + 1 → Adds 1 to the count.
// acc[fruit] = → Saves the updated count back in acc.

// when the first element enters the reduce it'll set it's value to (acc[fruit] || 0) + 1; = 0 + 1 = 1
// after first time it'll retrive the value from acc object
