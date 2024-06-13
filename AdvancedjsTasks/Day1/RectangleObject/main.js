

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    }



Rectangle.prototype.area = function () {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width) + 2 * (this.height);
};
Rectangle.prototype.displayInfo = function () {
    console.log(this.width);
    console.log(this.height);
    console.log(this.area());
    console.log(this.perimeter());
};


var re = new Rectangle(2,3);
console.log(re);
console.log(re.displayInfo()); 