//Create an object car with properties make, model, and year, then print them.
//Add a new property color to the car object, then delete the year property.

//Using Object literals
var car = {
  model: "Creta",
  maker: "Hyundai",
  year: "2025",
  getinfo: function () {
    return this.maker + " " + this.model + " " + this.year;
  },
};
car.color = "Black";
console.log(car.color);
//Deleting Year property in Car
// delete car.year;

// console.log(car.year); //checking after deleting the object

//Using the new Object() Constructor

// var book = new Object();
// (book.name = "The Alchamist"),
//   (book.author = "Paulo Coelho"),
//   (book.year = "1988");

// console.log(book.name);

//Object constructor method
// function carr(model, maker, year) {
//   (this.model = model), (this.maker = maker), (this.year = year);
// }

// let myCar = new carr("XUV 3X0", "M&M", "2025");
// myCar.color = "Black";
// console.log(myCar.color);

console.log(car.getinfo());
