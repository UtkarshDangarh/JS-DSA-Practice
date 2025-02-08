//Given an array of objects representing books (each with title, author, and year),
//write a function that takes a title and returns the book object that matches that title.

let books = [
  { title: "The Alchemist", released: 1945 },
  { title: "Animal Farm", released: 1950 },
  { title: "1984", released: 1949 },
];

function findBook(title) {
  let book = books.filter((book) => book.title === title);
  console.log(book);
}

findBook("1984");
