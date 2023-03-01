let theVal;

// String to Number
theVal = Number('56');
theVal = Number(true);
theVal = Number(false);
theVal = Number(null);
theVal = Number('hello'); // NaN
theVal = Number([1,2,3]); // NaN

theVal = parseInt('100');
theVal = parseFloat('100.347');

// tell us about theVal
console.log(theVal);
console.log(typeof theVal);
console.log(theVal.toFixed(2));

// Type Coercion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

