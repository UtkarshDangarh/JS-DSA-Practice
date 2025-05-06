//Promise.all(): Write a function fetchAllData that accepts an array of promises (e.g. fetching user data, posts, and comments),
//Use Promise, all() to resolve all promises simultaneously, and log the results once all promises are fulfilled

function fetchUser() {
  const user = { name: "John", age: 30 };
  return new Promise((resolve) => {
    setTimeout(() => resolve(user), 1000);
  });
}

function fetchPosts() {
  const posts = ["Post 1", "Post 2"];
  return new Promise((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Nice!");
    }, 1000);
  });
}

function fetchAll(promises) {
  Promise.all(promises)
    .then((results) => {
      console.log("All Data Fetched:");
      console.log("User:", results[0]);
      console.log("Posts:", results[1]);
      console.log("Comments:", results[2]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchAll([fetchUser(), fetchPosts(), fetchComments()]);
