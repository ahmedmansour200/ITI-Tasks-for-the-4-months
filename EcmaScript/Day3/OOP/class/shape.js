// Shape
export class Shape {
    constructor() {
      if (new.target == Shape) {
        throw "Cannot instantiate Shape directly.";
      }
    }
  }