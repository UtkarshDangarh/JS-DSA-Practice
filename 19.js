//Create an object rectangle with width, height, and a method to calculate the area.

//Using Object Literal
// var rectangle = {
//   height: 10,
//   width: 5,
//   area: function () {
//     return this.height * this.width;
//   },
//   perimeter: function () {
//     return (this.height + this.width) * 2;
//   },
// };

// console.log(rectangle.perimeter());

//Constructor mentod
function Rectangle(length, width) {
  (this.length = length), (this.width = width);
  this.area = function () {
    return this.length * this.width;
  };
  this.perimeter = function () {
    return (this.length + this.width) * 2;
  };
}

var rect1 = new Rectangle(5, 10);
var rect2 = new Rectangle(10, 16);
console.log(rect2.area());
