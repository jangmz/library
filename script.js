function Book(bookId, title, author, pages, isRead) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    // gathers data from the input fields in dialog
    let bookId = myLibrary[myLibrary.length - 1].bookId + 1;
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let radio = document.getElementsByName("is-read");
    let isRead;

    // check which radio button is selected regarding the "read" status
    radio.forEach(entry => {
        if (entry.checked == true) {
            if(entry.value == "no"){
                isRead = false;
            } else {
                isRead = true;
            }
        }
    })

    // create an object and push it in the array
    const book = new Book(bookId, title.value, author.value, pages.value, isRead);
    myLibrary.push(book);
    createBookCard(book);
    
    // clear the input fields
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead = "";
}

function createBookCard(book) {
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
        toggleReadStatus(readToggleIcon.parentNode.parentNode.id);
    });

    // inserts created elements in the card div, appends card to all the cards
    card.appendChild(bookTitle);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readStatus);
    card.appendChild(deleteIcon);
    cards.appendChild(card);

    console.log(myLibrary);
} 

function readMyLibrary() {    
    myLibrary.forEach(book => {
        createBookCard(book);
    });
}

function deleteBook(bookId) {
    // remove from DOM
    const element = document.getElementById(bookId);
    element.remove();

    // remove from an array
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].bookId == bookId) {
            myLibrary.splice(i, 1);
        }
    }
    
}

function toggleReadStatus(bookId) {
    myLibrary.forEach(book => {
        // find the id of the book
        if(book.bookId == bookId) {
            // check the current read status and change it
            if(book.isRead === false || book.isRead.toLowerCase == "no") {
                book.isRead = true;
            } else {
                book.isRead = false;
            }
        }
    });
    console.log(myLibrary);
}

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