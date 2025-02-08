//Illegal Shadowing

//Can not shadow a let variable with Var variable
// let a = 10;
{
  //   var a = 20; // Error: Block scope variable a can not be redeclared as var is not blocked scope and this
  // variable will conflict with "let a = 10" variable
}

//can shadow var with let.

var a = 10;
{
  let a = 20; // This is allowed as let is only block scope and will lot conflict with Var
}
