//Create an object rectangle with width, height, and a method to calculate the area.

var rectangle = {
  height: 10,
  width: 5,
  area: function () {
    return this.height * this.width;
  },
  perimeter: function () {
    return (this.height + this.width) * 2;
  },
};

console.log(rectangle.perimeter());
