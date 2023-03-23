// // FUNCTION DECLARATIONS
// // STEP 1
// function greeting() { 
//   console.log('Hello World!') 
// };
// greeting();

// // STEP 2 function return
// function greeting() {
//   return 'Welcome.'
// }
// console.log(greeting());

// // STEP 3 function parameter
// function greeting(group) {
//   return `Welcome ${group}!`
// }
// console.log(greeting('Elves'));

// // STEP 4 function defaults
// function greeting(group = 'Dwarves') {
//   // if(typeof group === 'undefined') {group = 'Dwarves'} //pre-ES6
//   return `Welcome ${group}!`
// }
// console.log(greeting('Sith'));

// //FUNCTION EXPRESSIONS
// const areaOfCircle = function(radius) {
//   const pi = Math.PI;
//   const area = pi * radius * radius;
//   return area;
// };
// console.log(areaOfCircle(3));

// // IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS

// (function(){
//   console.log('an IIFE...')
// })();

// (function(name = 'Jeff'){
//   console.log(`${name} welcome to IIFE...`)
// })();

// // PROPERTY METHODS

const meetings = {
  count: 0,
  hours: 0,
  topic: 'scrum',
  addOne: function(){
    this.count++;
  },
  bookTime: function(hrs){
    this.hours += hrs;
  }
};
meetings.addOne();
meetings.addOne();
meetings.bookTime(6);
meetings.bookTime(4);
console.log(`${meetings.count} meetings booked, 
  with a total of ${meetings.hours} hours.`);