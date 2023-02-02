// --- Constructor --- //

// A constructor is a special method that is used to initialize objects.  
// The advantage of a constructor is that it is called when an object of a class is created. 
// Constructors save time as they help reducing the amount of code.

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2.getSummary());
console.log(book2);