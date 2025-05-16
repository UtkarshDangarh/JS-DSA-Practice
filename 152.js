//CLosure for data hiding

function close() {
  var num = 5;
  return function count() {
    return (num = num + 1);
  };
}

const result = close()();
console.log(result);
