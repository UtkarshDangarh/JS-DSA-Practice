//Delayed Message with Parameters: Write a function delayedGreeting that takes two parameters,
//name and delay. Use setTimeout to log "Hello, [name]!" after delay milliseconds.

function delayedGreeting(name, delay) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, delay);
}

delayedGreeting("Utkarsh", 3000);
