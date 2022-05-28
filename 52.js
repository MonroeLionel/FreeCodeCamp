// Global Scope and Functions

/*
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.
*/

// Declare the myGlobal variable below this line
const oopsGlobal = 5;
const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  let Assign = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}