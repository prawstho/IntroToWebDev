// var, let, const

// // variables can be reassigned
// var fullName = 'Jack Nimble';
// console.log(fullName);
// fullName = 'Jill Spill';
// console.log(fullName);

// // variables can be initialized
// var message;
// console.log(message); 
// message = 'Welcome to JavaScript!'
// console.log(message);

// // can be created with letters, numbers, $, _ 
// // cannot start with a number
// var firstName = "Jack"; // Camel case (most common)
// var first_name = "Jack"; // Underscore
// var FirstName = "Jack"; // Pascal case (used as a class in OO programming)
// var firstname;
// console.log(first_name);

// // LET
// let fullName;
// fullName = "Sue Storm";
// console.log(fullName);
// // fullname = "Johnny Storm";
// fullName = "Johnny Storm";
// console.log(fullName);

// // CONST
// const lastName = "Storm";
// console.log(lastName);
// // constants cannot be re-assigned.
// // lastName = "Smith";
// // it must have a value
// const message  = "the message";
// console.log(message);


// const person = {
//   firstName: 'Marcus',
//   lastName: 'Aurelius',
//   age: 59
// };
// console.log(person);

// person.firstName = 'Annia';
// person.age = 34;
// console.log(person);

// console.log(person.lastName);

const numbers = [1,2,3,4,5];
numbers.push(6);
numbers = [4,5,6,7,8]; // constants cannot be re-assigned.

console.log(numbers);

