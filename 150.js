//call inner functoin like ()()()

const a = function () {
  return function b() {
    return function c() {
      console.log("C");
    };
  };
};

const result = a()()();
