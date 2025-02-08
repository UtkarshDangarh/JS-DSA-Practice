//Clearing a Timeout: Write a function cancelTimeout that sets up a setTimeout to log "This will not log"
//after 3 seconds but then clears the timeout immediately after setting it. Ensure that the message is
//never logged.

function cancelTimeout() {
  const timeoutId = setTimeout(() => {
    console.log("This will never log");
  }, 2000);
  clearTimeout(timeoutId); //cancel timeout needs a timeout ID to know which timeout to cancel.
}
cancelTimeout();
