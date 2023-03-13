let theVal;

// A string and a number as a string
theVal = "a string";
theVal = 57 + 90;

// Number to String
theVal = String(55);
theVal = String(55-11);
// // Boolean to String
theVal = String(true);
// // Date to String
theVal = String(new Date());
// // Array to String
theVal = String([10,20,30,40]);

// using the toString() function
theVal = (55).toString();
theVal = (true).toString();
theVal = ([8,9,10,11]).toString();

// tell us about theVal
console.log(theVal);
console.log(typeof theVal);
console.log(theVal.length);