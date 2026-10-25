"use strict";

// Q3: Library Management System
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = String(isbn);
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`Cannot issue "${this.title}": it is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`Issued "${this.title}" successfully.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`Returned "${this.title}" successfully.`);
        return true;
    }

    getDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.isbn} | ${this.isIssued ? "Issued" : "Available"}`;
    }
}

const books = [
    new Book("Clean Code", "Robert C. Martin", "9780132350884"),
    new Book("The Pragmatic Programmer", "Andrew Hunt", "9780201616224"),
    new Book("Atomic Habits", "James Clear", "9780735211292", true),
    new Book("Deep Work", "Cal Newport", "9781455586691")
];

function issueByISBN(isbn) {
    const book = books.find(item => item.isbn === String(isbn));
    if (!book) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }
    book.issueBook();
}

console.log("=== Available Books ===");
books.filter(book => !book.isIssued).forEach(book => console.log(book.getDetails()));

console.log("\n=== Issue a book by ISBN ===");
issueByISBN("9780201616224");

console.log("\n=== All Books After Issue ===");
books.forEach(book => console.log(book.getDetails()));
