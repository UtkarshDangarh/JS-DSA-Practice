//Create an array of student objects (name, age, grade), then filter students with grades above 80.

var students = [
  { name: "Snandeep", age: "17", grade: 80 },
  { name: "Bob", age: 16, grade: 70 },
  { name: "Charlie", age: 14, grade: 92 },
  { name: "David", age: 17, grade: 88 },
  { name: "Eve", age: 15, grade: 75 },
];

const highPerformers = students.filter((students) => students.grade >= 80);

console.log(highPerformers);
