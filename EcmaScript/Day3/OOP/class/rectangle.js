import { Shape } from "./shape.js";

  
export class Rectangle extends Shape {
    constructor(width, height) {
      super()
      this.width = width;
      this.height = height;
    }
    area() {
    return this.width * this.height;
      
    }
    perimeter(){
    return 2 * (this.width + this.height);
    }
    toString(){
    return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;

    }
  }