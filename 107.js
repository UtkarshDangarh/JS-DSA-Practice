//Write a function multiply(a, b) and use bind() to create a new function double that always uses a = 2.

function multiply(a, b) {
  console.log(a * b);
}

//Here 2 is value of a and null points to "this"
const double = multiply.bind(null, 2);

//value of b is passed here
double(7);
