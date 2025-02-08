//Recursive setTimeout as Interval: Implement a function recursiveTimer that takes a number n and
//logs "Time remaining: n" every second, counting down to 0, using setTimeout recursively
//(instead of setInterval). Once n reaches 0, it should log "Done!".

function recursiveTimer(n) {
  if (n < 0) {
    return;
  }
  if (n > 0) {
    setTimeout(() => {
      console.log(`Time remaining ${n}`);
      return recursiveTimer(--n);
    }, 1000);
  } else {
    console.log("Done");
  }
}

recursiveTimer(5);
