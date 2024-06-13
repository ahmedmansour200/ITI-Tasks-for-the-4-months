function Book(title, numOfChapters, author, numPages, publisher, numOfCopies) {
    this.title = title;
    this.numOfChapters = numOfChapters;
    this.author = author;
    this.numPages = numPages;
    this.publisher = publisher;
    this.numOfCopies = numOfCopies;
}

function Box(height, width, length, material, type) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.type = type;
    this.content = [];
}

Box.prototype.getNumOfBooks = function() {
    return this.content.length;
};

Box.prototype.getVolume = function() {
    return this.height * this.width * this.length;
};

Box.prototype.addBook = function(title, numOfChapters, author, numPages, publisher, numOfCopies) {
    const book = new Book(title, numOfChapters, author, numPages, publisher, numOfCopies);
    this.content.push(book);
};

Box.prototype.deleteBook = function(identifier) {
    this.content = this.content.filter(function(book) {
        return book.title !== identifier;
    });
};

Box.prototype.toString = function() {
    return `Dimensions: ${this.height}x${this.width}x${this.length}, Number of Books: ${this.getNumOfBooks()}`;
};

Box.prototype.valueOf = function() {
    return this.getNumOfBooks();
};

// test 

var box1 = new Box(10, 15, 20, "cardboard", "storage");
box1.addBook("Book One", 10, "Author One", 100, "Publisher One", 1);
box1.addBook("Book Two", 12, "Author Two", 200, "Publisher Two", 2);

var box2 = new Box(12, 20, 25, "plastic", "moving");
box2.addBook("Book Three", 15, "Author Three", 150, "Publisher Three", 1);

console.log(box1.toString()); // "Dimensions: 10x15x20, Number of Books: 2"
console.log(box2.toString()); // "Dimensions: 12x20x25, Number of Books: 1"

console.log(box1 + box2); // 3

box1.deleteBook("Book One");
console.log(box1.toString()); // "Dimensions: 10x15x20, Number of Books: 1"
