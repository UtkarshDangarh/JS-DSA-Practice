//Create an object representing a student with properties (name, age, grade, subjects[]), then print details.

//Create an object representing a student with properties like name, age, grade, and subjects (an array of subjects). Write a function to print out all the details of the student.
var student = {
  firstName: "Sandeep",
  lastName: "Yadav",
  grade: 80,
  subjects: ["Physics", "Chemistry", "Maths"],
};

console.log(student.subjects);

function studentDetails(student) {
  console.log(`Name: ${student.firstName} ${student.lastName}`);
  console.log(`Grade: ${student.grade}`);
  console.log(`Subjects: ${student.subjects}`);
}

studentDetails(student);
