// FUNCTION TYPES

// Anonymous Functions
const eatLunch = function() {
  return 'Belogna Sandwich.';
};
const eatLunch2 = () => { 
  return 'Belogna Sandwich.';
};
const eatLunch3 = (customer = 'Luke') => {
  return `${customer} should eat the Belogna Sandwich.`;
};
console.log(eatLunch3());

// Callback Functions
getDrink(function() {
  return 'Mostly sugar water.';
});
getDrink2(() => {
  return `Mostly sugar water.`;
});

setTimeout(() => { 
  console.log('timed out...');
}, 1500)

// Named Functions
// Factory
function eatDinner() {
  return 'Messy Fries.';
};
// Constructor
function Yacht(n) {
  this.name = n;
}
// Cannot be turned into arrow functions they are named, 
// arrow functions are essentially anonymous.

// Object Methods
const Person = {
  fullname: 'Jason Bourne',
  specialty: 'One step ahead',
  takeAction: () => {
    return this.specialty;
  }
}
console.log(Person.takeAction());

// Benefits of Arrow functions
// 1. Aesthetics
// 2. Binding/Scope of this.