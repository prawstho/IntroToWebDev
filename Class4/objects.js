// Object Literals
const boat = {
  name: 'Irish Stew',
  type: 'sail',
  make: 'catalina',
  model: '320',
  year: 1995,
  fuel: 'diesel',
  length: '32 ft',
  beam: '11 ft 9 in',
  depth: '6 ft',
  sails: ['main','jib','120%','150%','170%','spinnaker','drifter'],
  moorage: {
    name: 'Lewisporte Marina',
    street: 'Main Street',
    city: 'Lewisporte',
    province: 'NL',
    postal: 'A0G3A0',
    url: 'lewisporteyachtclub.com',
    berth: {
      dock: 'F',
      mooring: 12
    },
  },
  getAge: function(){
    const today = new Date();
    return today.getFullYear() - this.year;
  }
}

let val;
val = boat.name;
val = boat.sails[4];
// val = boat.moorage;
// val = boat.moorage.berth.mooring;
// val = boat.getAge();

console.log(val);

const crew = [
  { name: 'Joseph', age: 46, experience: 12 },
  { name: 'Nadil', age: 37, experience: 8 },
  { name: 'Sarah', age: 28, experience: 19 },
  { name: 'Satnam', age: 41, experience: 5 }
];

let accumulated = 0;
for (let i = 0; i < crew.length; i++) {
  console.log(crew[i].name);
  accumulated += crew[i].experience;
}
console.log(accumulated + ' years of total experience.')