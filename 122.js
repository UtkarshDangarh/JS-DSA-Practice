//Handling Multiple Errors with Promises: Write a function fetchDatawitherrors that simulates fetching data,
//but occasionally throws an error (e.g., by randomly rejecting the promise). Use catch () to handle the error,
//and ensure the error is logged properly.

const data = {
  fullName: "Walter White",
  age: 51,
};
function fetchDataWithError(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random >= 0.5) {
        resolve(data);
      } else {
        reject("Error while fetching the data");
      }
    }, 1000);
  });
}

fetchDataWithError(data)
  .then((value) => console.log(value))
  .catch((err) => console.log("Error: ", err));
