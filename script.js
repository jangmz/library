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
    console.log(myLibrary);
    alert("Book has been successfully submited!");
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
        
        if (book.isRead == true || book.isRead == "yes") {
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
    //readMyLibrary();
});

readMyLibrary();