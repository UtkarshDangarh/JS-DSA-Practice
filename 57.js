//Clearing setTimeout Before Execution: Write a function that sets up a setTimeout to log
//"This will be canceled". Immediately cancel this timeout using clearTimeout before it has a
//chance to execute. Verify that the message doesn’t appear in the console.
function cancelTimeout() {
  const timeoutId = setTimeout(() => {
    console.log("THis will be canceled");
    clearTimeout(timeoutId);
  }, 1000);
}
