//Scope Chain Access: Write a function outerFunc that defines a variable a and another function
//innerFunc inside it, which defines a variable b and another function innermostFunc inside it that
//logs both a and b. Call innermostFunc to observe how the scope chain works.

function outerFunc() {
  let a = 5;
  function innerFunc() {
    let b = 2;
    function innerMostFunc() {
      console.log(a);
      console.log(b);
    }
    return innerMostFunc;
  }

  return innerFunc();
}

const test = outerFunc(); //Calls outerFunc -> Calls innerFunc -> Returns innermostFunc
//test hold the innerMostFunc, which just logs the value of a and b

// console.log(test()); //If I do this it'll log the values and return undefined
//because test() does not return anything;

console.log(test());
