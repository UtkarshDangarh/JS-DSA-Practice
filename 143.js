//Creating a Simple Async Function with Delay: Write an async function delayedMessage that simulates a delayed
//message (using setTimeout). After a 3-second delay, log "Message received!".

function waiting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

async function delayedMessage() {
  await waiting();
  console.log("Message Received");
}
delayedMessage();
