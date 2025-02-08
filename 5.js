const day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Study DBMS");
    break;
  case "Tuesday":
    console.log("Revise DBMS");
    break;
  case "Wednesday":
    console.log("Study Operating System");
    break;
  case "Thursday":
    console.log("Revise Operating System and DBMS");
    break;
  case "Friday":
    console.log("Study Computer Networks and revise Operating System");
    break;
  case "Saturday":
    console.log("Reviss Computer Networks and solve DSA questions");
    break;
  case "Sunday":
    console.log("Revise All subjects and Relax");
    break;
  default:
    console.log("Enter correct day");
}
