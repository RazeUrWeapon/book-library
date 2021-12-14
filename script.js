let addNewBook
let myLibrary = [
    {
    'title': 'Think And Grow Rich',
    'author': 'Napoleon Hill',
    'pages': '320',
    'read': true
    },
    {
    'title': 'Atomic Habits',
    'author': 'James Clear',
    'pages': '320',
    'read': true
    },
    {
    'title': 'The Four Agreements',
    'author': 'Don Miguel Ruiz',
    'pages': '160',
    'read': false
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary() {
    addNewBook = new Book(title, author, pages, read)
    myLibrary.push(addNewBook)
}

function displayEachBook() {
    
}
