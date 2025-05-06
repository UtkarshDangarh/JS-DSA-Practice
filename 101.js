//Function Borrowing: Create an object mathOperations with a method addNumbers(a, b). Use call() to borrow this
//method in another object that doesn't have the method.

let mathOperation = {
  addNumbers: function () {
    console.log(this.a + this.b);
  },
};

//Here we have to use variable names as a an b because when we use this.a + this.b inside a method,
//JavaScript looks for properties named a and b on the object that is set as this.
//TO overcome this we can either use parameters in our method and pass arguments along with reference of this
//in call method
let obj2 = {
  a: 5,
  b: 5,
};

mathOperation.addNumbers.call(obj2);
