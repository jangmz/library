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
    const cards = document.querySelector(".cards");
    
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;
        const author = document.createElement("h4");
        author.textContent = book.author;
        const pages = document.createElement("h5");
        pages.textContent = book.pages + " pages";

        card.appendChild(bookTitle);
        card.appendChild(author);
        card.appendChild(pages);

        cards.appendChild(card);
    });
    
    
}
/*
while(myLibrary.length < 3) {
    addBookToLibrary();
}
*/

readMyLibrary();