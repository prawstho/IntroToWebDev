const firstName = 'Danny';
const lastName = 'Williams';
const age = 73;
const str = 'the fat cat sat on the mat';
const tags = 'spicy,red hot;mild,needs chaser';

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
val = firstName[4];

// indexOf()
val = lastName.indexOf('l');
val = lastName.lastIndexOf('l');

// charAt()
val = firstName.charAt(1);
val = firstName.charAt(firstName.length - 1);

// slice() Danny
val = firstName.slice(1,3);
val = firstName.slice(-2);

// split()
val = str.split(' ');
val = tags.split('i');

// replace()
val = str.replace('cat', 'bat');

// includes()
val = str.includes('mat');

console.log(val);