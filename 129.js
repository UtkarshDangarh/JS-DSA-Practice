//Basic Async Function: Write an async function getUserInfo that returns a user object after simulating a delay
//of 2 seconds using setTimeout. Use await to wait for the result and log the user data.

async function getUserInfo() {
  // Simulate API call with 2-second delay
  const user = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      });
    }, 2000);
  });

  console.log("User data:", user);
  return user;
}

getUserInfo();
