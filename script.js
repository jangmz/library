const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = prompt("Enter a book title");
    let author = prompt("Enter author of that book");
    let pages = prompt("Enter how many pages does that book have");

    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function readMyLibrary() {
    myLibrary.forEach(book => {
        console.log(`Title: ${book.title}, author: ${book.author}, pages: ${book.pages}.`);
    })
}

while(myLibrary.length < 3) {
    addBookToLibrary();
}

readMyLibrary();