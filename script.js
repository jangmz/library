function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const myLibrary = [{title: "Harry Potter 1", author: "JK Rowling", pages: 230}, {title: "Harry Potter 2", author: "JK Rowling", pages: 320}, {title: "Harry Potter 3", author: "JK Rowling", pages: 440}];

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

while(myLibrary.length < 4) {
    addBookToLibrary();
}

readMyLibrary();