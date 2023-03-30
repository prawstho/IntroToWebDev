// USING FUNCTIONS with ARRAY ITERATORS

const people = [
  {name: 'John', age: 3, isStudent: false},
  {name: 'Sue', age: 27, isStudent: true},
  {name: 'Ravi', age: 72, isStudent: true},
  {name: 'Satnam', age: 45, isStudent: false},
  {name: 'Bob', age: 18, isStudent: true}
];

// people.forEach( person => {
//   console.log(`Welcome ${person.name} status is ${person.isStudent}.`)
// })

people.forEach( person => {
  console.log(`${person.name} is a ${maturity(person.age)}.`)
})

function maturity(beer) {
  if(beer <= 12) return 'child'
  else if(beer > 12 && beer <= 19) return 'teenager'
  else if(beer > 19 && beer <= 65) return 'adult'
  else return 'retiree'
}

