function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    /*
    let title = prompt("Enter a book title");
    let author = prompt("Enter author of that book");
    let pages = prompt("Enter how many pages does that book have");
    */

    const book = new Book(title, author, pages, isRead);
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
        const isRead = document.createElement("p");
        
        if (book.isRead == true) {
            isRead.textContent = "Has been read.";
        } else {
            isRead.textContent = "Not read yet.";
        }

        card.appendChild(bookTitle);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(isRead);

        cards.appendChild(card);
    });
    
    
}

const myLibrary = [{title: "Harry Potter 1", author: "JK Rowling", pages: 230, isRead: true}, {title: "Harry Potter 2", author: "JK Rowling", pages: 320, isRead: true}, {title: "Harry Potter 3", author: "JK Rowling", pages: 440, isRead: false}];

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#close");

// open modal dialog
newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

// closes modal dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});

readMyLibrary();