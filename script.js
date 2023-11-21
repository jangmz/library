class Book {
    constructor(bookId, title, author, pages, isRead) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(title, author, pages, isRead) {
        const bookId = this.myLibrary.length > 0 ? this.myLibrary[this.myLibrary.length - 1].bookId + 1 : 0;

        // create new book and push it to array
        const book = new Book (bookId, title, author, pages, isRead);
        this.myLibrary.push(book);
        this.createBookCard(book);
        
        //console.log(this.myLibrary);
    }

    createBookCard(book) {
        // element creation for the card
        const cards = document.querySelector(".cards");
        const card = document.createElement("div");
        const bookTitle = document.createElement("h2");
        const author = document.createElement("h4");
        const pages = document.createElement("h5");
        const readStatus = document.createElement("div");
        const readStatusText = document.createElement("p");
        const deleteIcon = document.createElement("img");
        const readToggleIcon = document.createElement("label");
        const toggleInput = document.createElement("input");
        const toggleSpan = document.createElement("span");

        // set values for created elements
        card.className = "card";
        card.id = book.bookId;
        bookTitle.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + " pages";

        readStatus.className = "read-status";
        readStatusText.textContent = "Read Status: ";
        
        // delete icon src, class, id
        deleteIcon.src = "icons/delete.svg";
        deleteIcon.className = "delete-icon";
        deleteIcon.id = book.bookId;

        // event listener for the delete icon
        deleteIcon.addEventListener("click", () => {
            deleteBook(deleteIcon.id);
        })

        // toggle switch checkbox label class, input, span
        readToggleIcon.className = "switch";
        toggleInput.type = "checkbox";
        toggleSpan.className = "slider round";

        // set the status of checkbox
        if(book.isRead === true || book.isRead.toLowerCase == "yes") {
            toggleInput.checked = true;
        } else {
            toggleInput.checked = false;
        }

        // insert elements for toggle button
        readToggleIcon.appendChild(toggleInput);
        readToggleIcon.appendChild(toggleSpan);
        readStatus.appendChild(readStatusText);
        readStatus.appendChild(readToggleIcon);

        // event listener for the toggle switch
        readToggleIcon.addEventListener("change", () => {
            this.toggleReadStatus(readToggleIcon.parentNode.parentNode.id);
        });

        // inserts created elements in the card div, appends card to all the cards
        card.appendChild(bookTitle);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(deleteIcon);
        cards.appendChild(card);

    }

    readMyLibrary() {
        this.myLibrary.forEach( book => {
            this.createBookCard(book)
        });
    }

    deleteBook(bookId) {
        // remove from DOM
        const element = document.getElementById(bookId);
        element.remove();

        //remove from array
        this.myLibrary = this.myLibrary.filter(book => book.bookId != bookId);
        console.log(this.myLibrary);
    }

    toggleReadStatus(bookId) {
        this.myLibrary.forEach(book => {
            if (book.bookId == bookId) {
                book.isRead = !book.isRead
            }
        });
    }
}

// instatiate the library class
const library = new Library();

library.addBookToLibrary("Test Book 1", "Author One", 230, true);
library.addBookToLibrary("Test Book 2", "Author Two", 330, false);
library.addBookToLibrary("Test Book 3", "Author Three", 430, true);

// display books currently in array
//library.readMyLibrary();

// select elements for event listeners
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

// submit a book
newBookSubmition.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents sending to the server
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const radio = document.querySelector("input[name='is-read']:checked");
    const isRead = radio ? radio.value === "yes" : false;

    library.addBookToLibrary(title, author, pages, isRead);

    dialog.close();
});

// delete a book
document.querySelectorAll(".delete-icon").forEach(button => {
    button.addEventListener("click", () => {
        library.deleteBook(button.id);
    });
});

// toggle isRead property
document.querySelectorAll(".switch").forEach(toggleSwitch => {
    toggleSwitch.addEventListener("click", () => {
        library.toggleReadStatus(toggleSwitch.closest(".card").id);
    });
});

/*
const myLibrary = [
    {bookId: 0, title: "Test Book 1", author: "Author One", pages: 230, isRead: true},
    {bookId: 1, title: "Test Book  2", author: "Author Two", pages: 320, isRead: true},
    {bookId: 2, title: "Test Book  3", author: "Author Three", pages: 440, isRead: false}
];

// display books currently in the array
readMyLibrary();

// select elements for event listeners
const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#close");
const newBookSubmition = document.getElementById("bookSubmitForm");
const deleteButtons = document.querySelectorAll(".delete-icon");
const toggleSwitches = document.querySelectorAll(".switch");

// submits a book
newBookSubmition.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents sending to the server
    addBookToLibrary();
    dialog.close();
});

// delete a book
deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        deleteBook(button.id);
    });
});

// toggle for isRead property
toggleSwitches.forEach(toggleSwitch => {
    toggleSwitch.addEventListener("change", () => {
        toggleReadStatus(toggleSwitch.parentNode.parentNode.id);
    });
});
*/