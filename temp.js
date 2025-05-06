//Convert a normal function to a curried version
//Convert add(a, b, c) to add(a)(b)(c).

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(12));
