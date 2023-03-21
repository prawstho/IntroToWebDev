const firstName = 'Danny';
const lastName = 'Williams';
const age = 37;
const city = `St. John's`;
const temperature = 100;
let aString;
let html;

// Without template strings (ES5)
html = '<ul><li>First:' + firstName + '</li><li>Last:' + lastName + '</li><li>Age:' + age + '</li><li>City:' + city + '</li></ul>';

aString = "Welcome " + firstName + " and his friend's.";

html = '<ul>' +
      '<li>First:' + firstName + '</li>' +
      '<li>Last:' + lastName + '</li>' +
      '<li>Age:' + age + '</li>' +
      '<li>City:' + city + '</li>' +
      '</ul>';


// With template strings (ES6)
function greeting() {
  return 'Welcome to the Machine!'
};

aString = `Welcome ${firstName} and his friend's to\
 our ${age} birthday party in ${city}. We all need\
 to stay "quiet" until Mr. ${lastName} arrives.`;
 
console.log(aString);

html = `
  <ul>
    <li>First: ${firstName} </li>
    <li>Last: ${lastName} </li>
    <li>Age: ${age} </li>
    <li>City: ${city} </li>
    <li>Maths: ${34 + 66} </li>
    <li>Function: ${greeting()} </li>
    <li>Ternary Operator: ${age < 65 ? 'Premier' : 'Citizen'} </li>
    <li>Temperature: ${temperature < 100 ? 'Nice out' : 'sun screen'} </li>
  </ul>
`;

console.log(html);
document.body.innerHTML = html;