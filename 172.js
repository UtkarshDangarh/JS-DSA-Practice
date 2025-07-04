const n = 5;
for (let i = 0; i < n; i++) {
  let space = "";
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    space = space + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(space + row);
}
