//Shadowing : It occurs when a variable in local scope has same name as a variable in the outer scope, overriding it.

let name = "Utkarsh Dangarh";

{
  let name = "UD";
  console.log(name); // Will print UD
}

console.log(name); //Will print Utkarsh Dangarh
