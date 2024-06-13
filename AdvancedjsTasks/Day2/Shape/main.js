// Shape
function Shape() {
  if (new.target === Shape) {
    throw new Error("Cannot instantiate Shape directly.");
  }
}

// Rectangle
function Rectangle(width, height) {
  if (Rectangle.getObjectCount() > 1) {
    throw "creation of only one rectangle."
  }
  Shape.call(this);
  this.width = width;
  this.height = height;
  Rectangle.objectCount++;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Adding methods to Rectangle prototype
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

// Override toString method
Rectangle.prototype.toString = function () {
  return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
};

// Static property to count number of created objects
Rectangle.objectCount = 0;
Square.count = 0;
// Static method to get the count of created objects
Rectangle.getObjectCount = function () {
  return Rectangle.objectCount;
};
Square.getCount = function () {
  return Square.count;
};
// Square constructor that inherits from Rectangle
function Square(side) {
  if (Square.getCount() > 1) {
    throw "creation of only one square"
  }
  Rectangle.call(this, side, side);
  Rectangle.objectCount--;
  Square.count++;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// Override toString method for Square
Square.prototype.toString = function () {
  return `Square: Side = ${this.width}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
};

// test 1

try {
  var shape = new Shape(); // This should throw an error

} catch (e) {
  console.log(`This should is abstract class ${e}`);
}

// test 2
var rect = new Rectangle(10, 20);
var square = new Square(15);
console.log(rect.toString());
console.log(square.toString());
console.log(`Total created objects: ${Rectangle.getObjectCount()}`);
console.log(`Total created objects: ${Square.getCount()}`);

// test 3


try {
  var rect2 = new Rectangle(10, 20);
  var rect3 = new Rectangle(10, 20);

  console.log(`Total created objects: ${Rectangle.getObjectCount()}`);

} catch (e) {
  console.log(`creation of only one rectangle. ${e}`);
}
try {

  var square2 = new Square(15);
  var square3 = new Square(15);
  console.log(`Total created objects: ${Square.getCount()}`);

} catch (e) {
  console.log(`creation of only one square. ${e}`);

}

