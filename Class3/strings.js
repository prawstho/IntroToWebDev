const firstName = 'Danny';
const lastName = 'Williams';
const age = 73;
const str = 'the fat cat sat on the mat';
const tags = 'spicy,red hot,mild,needs chaser';

let val;
val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Roger ';
val += 'Waters';

val = 'Hello I am ' + firstName + ', I am now ' + age + ' years old.';

// Escaping
val = 'Peter\'s fat cat can\'t roll';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// changing the case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// strings as arrays
val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(3);
val = firstName.charAt(firstName.length - 1);

// slice()
val = firstName.slice(0,3);
val = firstName.slice(-2);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('cat', 'bat');

// includes()
val = str.includes('nat');

console.log(val);