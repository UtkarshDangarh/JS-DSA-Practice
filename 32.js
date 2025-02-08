//Create a variable name in the global scope and a function printName that logs name.
//Call printName without modifying name, then update name in the global scope and call printName again.

let name = "Utkarsh";

function printName() {
  console.log(name);
}
//Since name is not declared inside printName, JavaScript looks for name in the surrounding (global) scope.
printName();
name = "UD";
printName();

// The function still refers to the same name variable in the global scope.
// Since the value of name has changed to "UD", it logs "UD".
