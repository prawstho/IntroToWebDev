// Object Literals
const person = {
  first: 'bob',
  last: 'bobson',
  birthyear: '1987',
  address: {
    street: '123 Water St.',
    city: 'St. Johns',
    province: 'NL',
    postal: 'A1F6J7',
    country: 'CANADA'
  },
  hobbies: ['music', 'fishing', 'shed life', 'quad'],
  getAge: function(){
    const today = new Date();
    return today.getFullYear() - this.birthyear;
  }
};

// let peeps;
// peeps = person.getAge();
// console.log(`Persons age is ${peeps}`);

// var os = require('os');

// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());

// console.log("hostname: " + os.hostname());
// console.log("freemem: " + os.freemem());

const [firstArg,secondArg,thirdArg,forthArg] = process.argv;
console.log(process.argv);
console.log(`FIRST :` + firstArg);
console.log(`SECOND :` + secondArg);
console.log(`The final two args are: ${thirdArg} ${forthArg}`);