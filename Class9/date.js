// Working with the Date object

let val;
const today = new Date();
// const holiday = new Date();
val = today;
val = today.toString();
//val = today.toDateString();
val = today.toTimeString();

let birthday = new Date('12-21-1973') //MM-DD-YYYY
birthday = new Date('12-21-1973 14:45:30') //HH:MM:SS
birthday = new Date('July 23 1984') 
val = birthday;

val = today.getMonth(); // Remember: zero based 0
val = today.getHours();
val = today.getMinutes();
val = today.getTime(); // 01 Jan 1970

val = today.getFullYear() - birthday.getFullYear();

birthday.setDate(12);
birthday.setMonth(48);
val = birthday;

console.log(typeof val);
console.log(val);