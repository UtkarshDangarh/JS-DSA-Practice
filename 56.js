//Repeating Function with setInterval: Write a function repeatMessage that takes a message and a delay
//as parameters. Use setInterval to log the message every delay milliseconds. Add a condition to stop
//the interval after the message has been logged 5 times.

function repeatMessage(message, delay) {
  let count = 1;
  const interval = setInterval(() => {
    console.log(message);
    ++count;
    if (count > 5) {
      clearInterval(interval);
    }
  }, delay);
}

repeatMessage("Good Evening", 1000);
