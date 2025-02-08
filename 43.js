//IIFE (Immediately Invoked Function Expression): Write an IIFE that defines a variable secret set to
//"hidden message" and logs it. Then, try accessing secret outside the IIFE to see if it’s accessible.

(function iife() {
  let secret = "Hidden message";
  console.log(secret);
})();

console.log(secret); // this will not work as the varribale is inside the function scope
