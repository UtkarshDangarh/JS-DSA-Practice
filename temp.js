function cancelTimeout() {
  setTimeout(() => {
    console.log("This will not log");
  }, 3000);

  clearTimeout(); // ❌ Doesn't work! No timeout ID provided.
}

cancelTimeout();
