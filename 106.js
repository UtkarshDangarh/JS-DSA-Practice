//Create an object with a name property and a function sayHello that uses this.name. Use bind() to permanently
//bind the context and store it in a new function.

const obj1 = {
  fullName: "Sachin Tendulkar",
  sayHello: function () {
    console.log(`Hello my name is ${this.fullName} `);
  },
};

// Bind the context of sayHello to the obj1 object
const printName = obj1.sayHello.bind(obj1);

const obj2 = {
  fullName: "Virendra Sehwag",
};

//Binding context of sayHello to the obj2 object
const greet = obj1.sayHello.bind(obj2);

printName();
greet();
