//Given an array of objects representing products (each with properties name and price),
//write a function that sorts the array by price in ascending order.

let products = [
  {
    name: "Laptop",
    price: 999.99,
  },
  {
    name: "Keyboard",
    price: 79.5,
  },
  {
    name: "Smartphone",
    price: 599.0,
  },
  {
    name: "Mouse",
    price: 39.95,
  },
  {
    name: "Headphones",
    price: 149.99,
  },
];

let sorted = products.sort((a, b) => a.price - b.price);

//(a, b) => a.price - b.price is an arrow function where a and b represent two objects being compared.
//If the result is negative, a comes before b; if positive, b comes before a; if zero,
//their order remains unchanged.

console.log(products);
