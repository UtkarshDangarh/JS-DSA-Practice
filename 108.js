//Create a method inside an object that logs a message after 1 second using setTimeout.
//Use bind() to ensure the correct this context.

let obj1 = {
  message: "Good morning",
  greet: function () {
    setTimeout(
      function () {
        console.log(`Hello ${this.message}`);
      }.bind(this), // this ensures the correct context
      1000
    );
  },
};

//Without bind(this), the this inside the setTimeout callback would refer to the global object
//(window in browsers or undefined in strict mode), not the user object. That would result in undefined

obj1.greet();

//Instead of using bind(this) we can use arrow function as they don’t have their own this
//so they naturally use the outer this.
