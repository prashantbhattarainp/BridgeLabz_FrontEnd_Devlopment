class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully`);
        } else {
            console.log(`${this.title} is already issued`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned`);
    }
}

const books = [
    new Book("JavaScript Guide", "John", "1111"),
    new Book("DSA Notes", "David", "2222", true),
    new Book("Operating Systems", "Alex", "3333"),
];

const available = books.filter(b => !b.isIssued);
console.log("Available Books:", available);

function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book) book.issueBook();
    else console.log("Book not found");
}
