//Countdown Timer with Closure: Write a function createCountdown that takes a starting number n and
//returns a function that, when called, decrements and logs the countdown from n to 0. Once the countdown
//reaches 0, the function should log "Countdown complete" instead of going negative.

// function createCountdown(n) {
//   return function countLog() {
//     if (n >= 0) {
//       for (let i = n; i >= 0; i--) {
//         console.log(i);
//       }
//       console.log("Countdown complete");
//     } else {
//       console.log(`${n} is in negative`);
//     }
//   };
// }

function createCountdown(n) {
  return function () {
    if (n > 0) {
      console.log(n);
      n--;
    } else {
      console.log("Countdown Complete");
    }
  };
}

const countdown = createCountdown(5);

countdown(); //Logs the value
countdown();
countdown();
countdown();
countdown();
countdown();

//We do not console.log(countdown()) because it does not returns anything and will give undefined,
//if a function only logs something then we will only call it, and if a function will return something
//then we'll have to log it to see values
