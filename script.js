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
    displayEachBook()
}

function displayEachBook() {
    for (i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div')
        const titleDiv = documenent.createElement('div')
        const author = docuement.createElement('div')
        const read = document.createElement('div')
    
        bookCard.classList.add('card')
        titleDiv.classList.add('title')
        author.classList.add('author')
        read.classList.add('read')

        titleDiv.innerHTML = '<span>Title: </span>' book.title;
        bookCard.appendChild(titleDiv)
    }
}

function saveForLater(){
    const bookCard = document.createElement('div')
    const title = documenent.createElement('div')
    const author = docuement.createElement('div')
    const read = document.createElement('div')

    bookCard.classList.add('card')
    title.classList.add('title')
    author.classList.add('author')
    read.classList.add('read')
}