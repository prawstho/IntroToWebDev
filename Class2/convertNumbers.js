let theVal;

// String to Number
theVal = Number('56');
theVal = Number(true);
theVal = Number(false);
theVal = Number(null);
// // theVal = Number('hello'); // NaN
// theVal = Number([1,2,3]); // NaN

// theVal = parseInt('100.9999');
// theVal = parseFloat('100.342');

// // tell us about theVal
// console.log(theVal);
// console.log(typeof theVal);
// console.log(theVal.toFixed(2));

// Type Coercion
const val1 = Number('hello');
const val2 = 6;
const val3 = 10;
const sum2 = val1 + val2 + val3;
const sum = Number(val2 + val1 + val3); 

console.log(sum2);
console.log(Number(sum2));
console.log(typeof sum);

