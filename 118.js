//Chaining Promises: Write a function getuserInfo that first fetches user data (as in the previous example),
//then fetches their posts after a successful user fetch. Chain two promises and log the results: user info
//followed by their posts.

function getUserInfo(userID) {
  const users = {
    1: { name: "Alice", age: 25, posts: 21 },
    2: { name: "Bob", age: 28, posts: 18 },
  };

  return new Promise((resolve, reject) => {
    if (users[userID]) {
      resolve(users[userID]);
    } else {
      reject("Error Fetching User: Invalid ID");
    }
  });
}

function getUserPosts(postCount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User has ${postCount} posts.`);
    }, 1000);
  });
}

getUserInfo(1)
  .then((user) => {
    console.log("User Name:", user.name); // Logs only user's name
    return getUserPosts(user.posts); // Fetch posts
  })
  .then((posts) => {
    console.log(posts); // Logs post info
  })
  .catch((err) => {
    console.log("Error:", err);
  });
