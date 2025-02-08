//setTimeout: Write a function delayedMessage that takes a message and a delay (in milliseconds) as
//arguments and logs the message after the specified delay using setTimeout.

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedMessage("Hello User", 2000);
