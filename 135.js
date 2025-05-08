//Chaining Promises with Async-Await: Write an async function getUserAndPosts that fetches a user object and,
//once the user data is retrieved, fetches the user’s posts. Use await for both fetches and return the combined
//user data and posts.

// Simulate fetching a user
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Jane Doe" });
    }, 2000); // 2-second delay
  });
}

// Simulate fetching posts for a user
function fetchPostsByUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "Post 1", userId },
        { id: 102, title: "Post 2", userId },
      ]);
    }, 1500); // 1.5-second delay
  });
}

// Async function to chain the fetches
async function getUserAndPosts() {
  try {
    const user = await fetchUser();
    const posts = await fetchPostsByUser(user.id);

    const combined = {
      user,
      posts,
    };

    console.log("Combined Data:", combined);
    return combined;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUserAndPosts();
//We’re calling the function for its side effect (logging inside the function), not to handle the result
//externally. That’s why .then() isn’t necessary in this specific use case.
