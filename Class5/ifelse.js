// if(something){
//   do this action
// }else{
//   do this different action
// }

// id is now set to 100
const id = '100';
const firstName = "Matt";
// EQUAL TO ==
if(id == 100) {
  console.log('if == is CORRECT.');
}else{
  console.log('if == is INCORRECT.');
};

// if(firstName == "Matthew") {
//   console.log(`Yes, the person is ${firstName}.`)
// }else{
//   console.log(`The person first name is unknown.`)
// }

// // NOT !!!!

// // NOT EQUAL TO !=
// if(id != 100) {
//   console.log('if != is CORRECT.');
// }else{
//   console.log('if != is INCORRECT.');
// };

// // EQUAL, EQUAL, and EQUAL
// // =, ==, AND ===

// // EQUAL TO VALUE AND DATA TYPE ===
// if(id === 100) {
//   console.log('if === is CORRECT.');
// }else{
//   console.log('if === is INCORRECT.');
// };

// // NOT EQUAL, and NOT EQUAL
// // !=, AND !==

// // NOT EQUAL TO VALUE AND DATA TYPE ===
// if(id !== '101') {
//   console.log('if !== is CORRECT.');
// }else{
//   console.log('if !== is INCORRECT.');
// };

// const field = 10;
// //if(field) {
// if(typeof field !== 'undefined') {
//   console.log(`the field is ${field}.`)
// }else{
//   console.log(`the field is 'undefined'.`)
// }

// ELSE IF
const instrument = 'ukelele';
if(instrument === 'guitar'){
  console.log(`The instrument is a ${instrument}.`);
} else if(instrument === 'ukelele'){
  console.log(`The instrument is a ${instrument}.`);
} else if(instrument === 'mandolin'){
  console.log(`The instrument is a ${instrument}.`);
} else {
  console.log(`The ${instrument} is NOT known to me.`)
}

// // LOGICAL OPERATORS

const teacher = {
  name: 'Peter',
  age: 59,
  education: 'Masters',
  experience: 35
};

if(teacher.age >= 50 && teacher.education == 'Masters'){
  console.log(`${teacher.name} is old, and educated.`);
}

const auto = {
  make: 'Ford',
  model: 'Bronco',
  year: 2023,
  color: 'Green'
};

// AND &&
if(auto.year >= 2022 && auto.year <= 2023 && auto.make === 'Ford'){
  console.log(`${auto.make} ${auto.model} is new and a Ford.`)
} else if(auto.year >= 2010 && auto.year <= 2021) {
  console.log(`${auto.make} ${auto.model} is used.`)
} else {
  console.log(`${auto.make} ${auto.model} probably needs a rebuild.`)
}

// OR ||
const student = {
  name: 'Gerome',
  age: 45
};

if(student.age < 6 || student.age > 64){
  console.log(`${student.name} has sweet freedom.`);
} else if(student.age > 6 && student.age <= 18){
  console.log(`${student.name} is busy studying.`);
} else if(student.age >= 19 && student.age <= 64){
  console.log(`${student.name} is busy with adult learning.`);
} else {
  console.log(`${student.name} is enjoy well deserved rest.`);
}

// TERNARY OPERATOR
console.log(student.age === 45 ? 'Fourty-Five' : 'NOT Fourty-Five');