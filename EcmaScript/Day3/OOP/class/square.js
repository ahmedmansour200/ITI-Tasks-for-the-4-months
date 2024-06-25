import { Rectangle } from "./rectangle.js";

export class Square extends Rectangle {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    perimeter() {
        return 4 * (this.side);
    }
    toString() {
        return `Square: Side = ${this.side}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;

    }
}
