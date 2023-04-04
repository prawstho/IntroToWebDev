// UNDERSTANDING SCOPE
// let and const are more strict than var
// var is legacy, and different than other language implementations.
// Block Scope
// Function Scope
// Global Scope
// https://www.w3schools.com/js/js_scope.asp

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// // Function or local Scope
// function localScope() {
//   var a = 4;
//   let b = 5;
//   const c = 6; 
//   console.log('Function scope: ', a, b, c);
// }
// localScope();

// // Block Scope
// if(true) {
//   var a = 4;
//   let b = 5;
//   const c = 6; 
//   console.log('if() scope: ', a, b, c);
// }

// show difference between let and var
for(var a = 0; a < 10; a++) {
  console.log(`for loop ${a}.`)
}

console.log('Global scope: ', a, b, c);