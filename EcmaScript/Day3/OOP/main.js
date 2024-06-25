import { Shape } from "./class/shape.js";
import { Rectangle } from "./class/rectangle.js";
import { Square } from "./class/square.js";
import { Circle } from "./class/circle.js";
var cont = document.getElementById("container");

// test 1
// let shape = new Shape();

// test2
var rect =new Rectangle(12,10);
// console.log(rect.toString());

// test3
var square =new Square(10);
// console.log(square.toString());

// test4
var circle =new Circle(5);
// console.log(circle.toString());

cont.innerHTML = `<p>${rect.toString()} </p>
                <p>${square.toString()} </p>
                <p>${circle.toString()} </p>`

