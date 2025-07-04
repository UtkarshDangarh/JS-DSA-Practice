let num = 16721;
let x = num;
let rev = 0;
let temp;
while (x > 0) {
  temp = x % 10;
  rev = rev * 10 + temp;
  x = Math.floor(x / 10);
}

if (num === rev) {
  console.log("Num is Pelindrome");
} else {
  console.log("Not Pelindrome");
}
