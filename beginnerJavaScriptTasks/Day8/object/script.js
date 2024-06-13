var rectangle = {
    width:10,
    height:15,
    area (){
        return this.width * this.height;
    },
    perimeter(){
        return 2 * (this.width) + 2 * (this.height);
    },
    displayInfo(){
        document.querySelectorAll("p")[0].innerText = `width : ${this.width}`
        document.querySelectorAll("p")[1].innerText = `height : ${this.height}`
        document.querySelectorAll("p")[2].innerText = `area : ${this.area()}`
        document.querySelectorAll("p")[3].innerText = `perimeter : ${this.perimeter()}`
    }
};

rectangle.displayInfo();