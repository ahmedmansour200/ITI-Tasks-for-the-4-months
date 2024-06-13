function Author(name, email) {
    this.name = name;
    this.email = email;
}

function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
}

var numBooksTotal = 0;
var booksArray = [];
var currentBookIndex = 0;

var span1 = document.getElementsByTagName("span")[0];
function createBookForm() {
    var numBooks = document.getElementById('numBooks').value;
    var mainForm = document.getElementById('mainForm');
    // e.preventDefault();

    if (numBooks !== "" && isFinite(numBooks)) {

        mainForm.style.display = 'none';
        numBooksTotal = numBooks;

        addBookForm(currentBookIndex);
    } else {
        span1.textContent = `enter the number`
    }

}

function addBookForm(index) {
    var bookForms = document.getElementById('bookForms');
    bookForms.innerHTML = `
        <div class="book-form">
            <h3>Book ${index + 1}</h3>
            <label for="bookName${index}">Book Name:</label>
            <input type="text" id="bookName${index}" placeholder="Enter book name" pattern="[a-zA-Z]{3,20}" required><br>
            <span id="sp1"></span>
            <label for="bookPrice${index}">Price:</label>
            <input type="text" id="bookPrice${index}" placeholder="Enter book price" pattern="[0-9]{1,30}" required><br>
            <span id="sp2"></span>
            <label for="authorName${index}">Author Name:</label>
            <input type="text" id="authorName${index}" placeholder="Enter author name" pattern="[a-zA-Z]{3,20}" required><br>
            <span id="sp3"></span>
            <label for="authorEmail${index}">Author Email:</label>
            <input type="text" id="authorEmail${index}" placeholder="Enter author email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" required><br>
            <span id="sp4"></span>
            <button type="button" onclick="addBook(${index})">Add Book</button>
        </div>
    `;
}

function addBook(index) {
    var bookName = document.getElementById(`bookName${index}`).value;
    var bookPrice = document.getElementById(`bookPrice${index}`).value;
    var authorName = document.getElementById(`authorName${index}`).value;
    var authorEmail = document.getElementById(`authorEmail${index}`).value;

    validationAuthorName();
    validationEmail();
    validationName();
    validationBookPrice();
    if(validationName() && validationAuthorName() && validationBookPrice() && validationEmail()){

        if (bookName && bookPrice && authorName && authorEmail) {
            var author = new Author(authorName, authorEmail);
            var book = new Book(bookName, bookPrice, author);
            booksArray.push(book);
            currentBookIndex++;
    
            if (currentBookIndex < numBooksTotal) {
                addBookForm(currentBookIndex);
            } else {
                document.getElementById('bookForms').innerHTML = '';
                document.getElementById('submitBooksButton').style.display = 'block';
            }
        } else {
            alert('Please fill out all fields');
        }
    }
    

    // validation name
function validationName() {
    if (bookName == "" || isFinite(bookName)) {
        document.getElementById("sp1").innerText = "please enter the name";
        return false;
    }
    return true
}
function validationAuthorName(){
    if (authorName == "" || isFinite(authorName)) {
        document.getElementById("sp3").innerText = "please enter the name";
        return false;
    }
    return true
}

// 
function validationBookPrice(){
    if (bookPrice == "" || isNaN(bookPrice)) {
        document.getElementById("sp2").innerText = "please enter the Number";
        return false;
    }
    return true
}

function validationEmail() {
    if (authorEmail == "" || !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(authorEmail))) {
        document.getElementById("sp4").innerText = "please enter format ahmed@gmail.com";
        return false
    }
    return true
}



}

function submitBooks() {
    populateTable(booksArray);
}

/// the code is not editor
// function populateTable(booksArray) {
//     var table = document.getElementById('booksTable');
//     var tbody = table.querySelector('tbody');
//     tbody.innerHTML = '';

//     booksArray.forEach(book => {
//         var row = tbody.insertRow();
//         row.insertCell(0).textContent = book.name;
//         row.insertCell(1).textContent = book.price;
//         row.insertCell(2).textContent = book.author.name;
//         row.insertCell(3).textContent = book.author.email;
//     });

//     table.style.display = 'block';
// }

function populateTable(booksArray) {
    const table = document.getElementById('booksTable');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    booksArray.forEach((book, index) => {
        const row = tbody.insertRow();
        row.setAttribute('data-index', index);
        row.insertCell(0).textContent = book.name;
        row.insertCell(1).textContent = book.price;
        row.insertCell(2).textContent = book.author.name;
        row.insertCell(3).textContent = book.author.email;
        const actionsCell = row.insertCell(4);
        actionsCell.innerHTML = `
            <button type="button" onclick="editBook(${index})">Edit</button>
            <button type="button" onclick="deleteBook(${index})">Delete</button>
        `;
    });

    table.style.display = 'block';
}

function editBook(index) {
    var row = document.querySelector(`[data-index='${index}']`);
    var cells = row.children;
    
    cells[0].innerHTML = `<input type="text" value="${booksArray[index].name}" id="editBookName${index}" pattern="[a-zA-Z]{3,20}" required>`;
    cells[1].innerHTML = `<input type="text" value="${booksArray[index].price}" id="editBookPrice${index}" pattern="[0-9]{1,30}" required>`;
    cells[2].innerHTML = `<input type="text" value="${booksArray[index].author.name}" id="editAuthorName${index}" pattern="[a-zA-Z]{3,20}" required>`;
    cells[3].innerHTML = `<input type="email" value="${booksArray[index].author.email}" id="editAuthorEmail${index}" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" required>`;
    cells[4].innerHTML = `
        <button type="button" onclick="saveBook(${index})">Save</button>
        <button type="button" onclick="cancelEdit(${index})">Cancel</button>
    `;
}

function saveBook(index) {
    var editedName = document.getElementById(`editBookName${index}`).value;
    var editedPrice = document.getElementById(`editBookPrice${index}`).value;
    var editedAuthorName = document.getElementById(`editAuthorName${index}`).value;
    var editedAuthorEmail = document.getElementById(`editAuthorEmail${index}`).value;

    if (editedName && editedPrice && editedAuthorName && editedAuthorEmail) {
        booksArray[index].name = editedName;
        booksArray[index].price = editedPrice;
        booksArray[index].author.name = editedAuthorName;
        booksArray[index].author.email = editedAuthorEmail;

        populateTable(booksArray);
    } else {
        alert('Please fill out all fields');
    }
}

function cancelEdit(index) {
    populateTable(booksArray);
}

function deleteBook(index) {
    booksArray.splice(index, 1);
    populateTable(booksArray);
}