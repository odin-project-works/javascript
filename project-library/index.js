let myLibrary = [];

function Book(title, author, noOfPages) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
}

Book.prototype.read = function(isRead) {
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function populateLibrary() {
    let book1 = new Book("abc", "Mike", 100);
    let book2 = new Book("xyz", "Marry", 50);
    let book3 = new Book("uvw", "Jack", 500);
    
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
}

populateLibrary();

let bookListElement = document.getElementById('book-list');
myLibrary.forEach(book => {
    let newBookEntry = document.createElement('tr');

    let titleNode = document.createElement('td');
    titleNode.appendChild(document.createTextNode(book.title));

    let authorNode = document.createElement('td');
    authorNode.appendChild(document.createTextNode(book.author));

    let pageNode = document.createElement('td');
    pageNode.appendChild(document.createTextNode(book.noOfPages + " pages"));
    
    newBookEntry.appendChild(titleNode);
    newBookEntry.appendChild(authorNode);
    newBookEntry.appendChild(pageNode);

    bookListElement.appendChild(newBookEntry);
})