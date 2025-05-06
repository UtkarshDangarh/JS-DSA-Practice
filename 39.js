//Preserving State with Closures: Create a function createMultiplier that takes a number factor
//and returns a function that multiplies its input by factor. Test this by creating two multipliers,
//one with factor = 2 and another with factor = 5.

function createMultiplier(factor) {
  return function multiplies(inp) {
    return inp * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quintuple = createMultiplier(5);

console.log(double(4)); //Output 8
console.log(double(2)); //This will make an independent function call and output will be 2*2 = 4
console.log(triple(5));
console.log(quintuple(2));
