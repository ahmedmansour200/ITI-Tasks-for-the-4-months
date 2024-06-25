import { Square } from "./square.js";

const PI = Math.PI;

export class Circle extends Square{
    constructor(radius){
        super()
        this.radius = radius;
    }
    area() {
        return PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * PI * (this.radius);
    }
    toString() {
        return `Circle: radius = ${this.radius}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;

    }

}