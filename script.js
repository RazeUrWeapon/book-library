const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const bookTableBody = document.querySelector('#bookTableBody');
const form = document.querySelector('.library-input');

let myLibrary = [
    {
    'title': 'Think And Grow Rich',
    'author': 'Napoleon Hill',
    'pages': '320',
    'read': 'read'
    },
    {
    'title': 'Atomic Habits',
    'author': 'James Clear',
    'pages': '320',
    'read': 'read'
    },
    {
    'title': 'The Four Agreements',
    'author': 'Don Miguel Ruiz',
    'pages': '160',
    'read': 'not read'
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    if (title.value === '' || author.value === '' || pages.value === '') {
        alert('Please fill in all fields.');
    } else {
        const addNewBook = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(addNewBook);
    }
}

function displayEachBook() {
    bookTableBody.innerHTML = '';

    myLibrary.forEach((book) => {
        const tableRow = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><button class="status-button ${book.read}">${book.read}</button></td>
                <td><a href="#" class="delete">X</a></td>
            </tr>
            `;
            bookTableBody.insertAdjacentHTML('afterbegin', tableRow);
    });
}

// Change read status on click
function changeStatus(el) {
    if (el.classList.contains('not')) {
        el.textContent = 'Not read';
    } else {
        el.textContent = 'Read';
    }
}

// Delete button functionality
function deleteBook(el) {
    if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }
}

// Clears text fields
function clearInputs() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    displayEachBook();
    clearInputs();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayEachBook();
    clearInputs();
});

bookTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('status-button')) {
        e.target.classList.toggle('not');
        changeStatus(e.target);
    }
    deleteBook(e.target);
});