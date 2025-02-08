//Simple setInterval Counter: Write a function startCounter that takes a number n as an argument and
//uses setInterval to log each number from 1 up to n every second. Once n is reached, clear the interval.

function startCounter(n) {
  const interval = setInterval(() => {
    console.log(n);
    n++;
    if (n > 5) {
      clearInterval(interval);
      console.log("Count Complete");
    }
  }, 1000);
}

startCounter(1);
