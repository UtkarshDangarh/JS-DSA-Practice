//Promise.race(): Write a function fetchFastest that accepts an array of promises (e.g., fetching different
//pieces of data). Use Promise. race() to return the result of the fastest promise, and log the result.

function fetchUser() {
  const user = { name: "John", age: 30 };
  return new Promise((resolve) => {
    setTimeout(() => resolve(user), 2000);
  });
}

function fetchPosts() {
  const posts = ["Post 1", "Post 2"];
  return new Promise((resolve) => {
    setTimeout(() => resolve(posts), 500);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Nice!");
    }, 1000);
  });
}

function fetchFastest(promises) {
  Promise.race(promises)
    .then((value) => {
      console.log("Result of fastest Promise is : ", value);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchFastest([fetchUser(), fetchPosts(), fetchComments()]);
