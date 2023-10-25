function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let radio = document.getElementsByName("is-read");
    let isRead;

    radio.forEach(entry => {
        if (entry.checked == true) {
            isRead = entry.value;
        }
    })

    const book = new Book(title.value, author.value, pages.value, isRead);
    
    myLibrary.push(book);
    addBookCard(book);
    
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead = "";
}

function addBookCard(book) {
    const cards = document.querySelector(".cards");
    const card = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const author = document.createElement("h4");
    const pages = document.createElement("h5");
    const isRead = document.createElement("p");

    card.className = "card";
    bookTitle.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " pages";
    
    if (book.isRead == true || book.isRead == "yes") {
        isRead.textContent = "Has been read.";
    } else {
        isRead.textContent = "Has not been read yet.";
    }
    
    card.appendChild(bookTitle);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    cards.appendChild(card);
} 

function readMyLibrary() {
    const cards = document.querySelector(".cards");
    
    myLibrary.forEach(book => {
        addBookCard(book);
    });
    
    
}

const myLibrary = [{title: "Harry Potter 1", author: "JK Rowling", pages: 230, isRead: true}, {title: "Harry Potter 2", author: "JK Rowling", pages: 320, isRead: true}, {title: "Harry Potter 3", author: "JK Rowling", pages: 440, isRead: false}];

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#close");
const newBookSubmition = document.getElementById("bookSubmitForm");

// open modal dialog
newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

// closes modal dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});

// submits a book
newBookSubmition.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents sending to the server
    addBookToLibrary();
    dialog.close();
});

readMyLibrary();