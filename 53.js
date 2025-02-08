//Countdown Timer with setInterval: Create a countdown function countdown that takes a starting number
//n and uses setInterval to log each number down to 0 every second. When it reaches 0, it should
//log "Time's up!" and stop.

function countdown(n) {
  const interval = setInterval(() => {
    console.log(n);
    n--;
    if (n < 0) {
      clearInterval(interval);
      console.log("Time's up!!");
    }
  }, 1000);
}

countdown(5);
