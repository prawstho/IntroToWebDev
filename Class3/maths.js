const numb1 = 100;
const numb2 = 50;
let val;

// simple math
val = numb1 + numb2;
val = numb1 - numb2;
val = numb1 * numb2;
val = numb1 / numb2;
val = numb1 % numb2; // modulus

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(3.78);
val = Math.ceil(3.98);
val = Math.floor(3.98);
val = Math.sqrt(49);
val = Math.abs(-9);
val = Math.pow(6, 3);
val = Math.min(3,5,56,43,129,16,87,12,1);
val = Math.max(3,5,56,43,129,16,87,12,1);

val = Math.random();
val = Math.random() * 10;
val = Math.floor(Math.random() * 10 + 1);

console.log(val);