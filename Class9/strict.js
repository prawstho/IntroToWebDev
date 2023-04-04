// USE STRICT
// https://www.w3schools.com/js/js_strict.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

"use strict";
let x = 3.14;       // This will cause an error because x is not declared
console.log(x);

myFunction();
theFunction();

function myFunction() {
  y = 2023;   // This will also cause an error because y is not declared
  console.log(y);
}

function theFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}