// Arrays
const integers = [98,56,345,87,5,76,91,123,43];
const integers2 = new Array(65,93,4,71,34,82);
const instruments = ['piano','flute','guitar','tenor banjo','ugly stick'];
const assorted = ['string',54,false,{a:2,b:3},null,undefined,new Date()];
const words = 'the fat cat sat on the mat.'

let val;
// length
val = integers.length;
console.log('integers: ' + val);
val = instruments.length;
console.log(`instruments: ${val}`);
val = assorted.length;
console.log(`assorted: ${val}`);

// is array
val = Array.isArray(integers);
console.log('integers is array?: ' + val);
val = Array.isArray(assorted);
console.log('assorted is array?: ' + val);
val = Array.isArray(words);
console.log('words is array?: ' + val);

// get values
let pos = 3;
val = integers[pos];
console.log(`the value in position ${pos} is: ${val}.`);
val = instruments[pos];
console.log(`the value in position ${pos} is: ${val}.`);

// // insert
// integers[3] = 345;
// console.log(integers);
// instruments[2] = 'ukelele';
// console.log(instruments);

// find index
let idx;
let item = 91;
idx = integers.indexOf(item);
console.log(`the index of the item ${item} is: ${idx}.`);
item = 'flute';
idx = instruments.indexOf(item);
console.log(`the index of the item ${item} is: ${idx}.`);

// // add to end
// integers.push(876);
// console.log(integers);
// instruments.push('mandolin');
// console.log(instruments);

// // add to front
// integers.unshift(231);
// console.log(integers);
// instruments.unshift('kazoo');
// console.log(instruments);

// // take off end
// integers.pop();
// console.log(integers);
// instruments.pop();
// console.log(instruments);

// // take off front
// integers.shift();
// console.log(integers);
// instruments.shift();
// console.log(instruments);

// // take out middle
// integers.splice(2,2);
// console.log(integers);
// instruments.splice(1,3);
// console.log(instruments);

// // reverse
// integers.reverse();
// console.log(integers);
// instruments.reverse();
// console.log(instruments);

// sort
integers.sort();
console.log(integers);
integers.sort((a,b)=>a-b);
// https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958
console.log(integers);
instruments.sort();
console.log(instruments);
