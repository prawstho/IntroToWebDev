// Arrays
const integers = [98,56,345,87,5,76,91,123,43];
const integers2 = new Array(65,93,4,71,34,82);
const instruments = ['piano','flute','guitar','tenor banjo','ugly stick'];
const assorted = ['string',54,false,{a:2,b:3},null,undefined,new Date()];
const sentence = 'the fat cat sat on the mat.'

// FOR
for(let i = 0; i < integers.length; i++) {
  console.log(`Integer ${integers[i]}.`)
};

for(let i = 0; i < instruments.length; i++) {
  console.log(`Instrument: ${instruments[i]}.`)
};

// FOREACH
instruments.forEach(function(instrument) {
  console.log(`instrument is ${instrument}.`);
});

instruments.forEach(function(instrument, index) {
  console.log(`instrument is ${instrument} with an index of ${index}.`);
});

// assorted.forEach(item => {
//   console.log(item);
// });

const octaves = [
  {id: 10, instrument: 'Tenor Banjo', keyOctave: 'G2'},
  {id: 20, instrument: 'Guitar', keyOctave: 'E2'},
  {id: 30, instrument: 'Bass Guitar', keyOctave: 'E1'},
  {id: 40, instrument: 'Mandolin', keyOctave: 'G2'},
  {id: 50, instrument: 'Ukulele', keyOctave: 'G4'}
];

// octaves.forEach(function(octave, index){
//   console.log(`${octave.id} : ${octave.instrument} is often tuned in ${octave.keyOctave} 
//   with index of ${index}.`)
// })

// for(let i = 0; i < octaves.length; i++) {
//   console.log(`${octaves[i].instrument} is often tuned in ${octaves[i].keyOctave}.`)
// };

// // MAP
// const ids = octaves.map(function(octave){
//   return octave.keyOctave;
// });
// console.log(ids);

// // FOR IN LOOP (ARRAY)
// for(let x in instruments){
//   console.log(x);
// }
// for(let x in instruments){
//   console.log(`${x} : ${instruments[x]}`);
// }
// // FOR OF LOOP (ARRAY)
// for(let x of instruments){
//   console.log(x);
// }

// // FOR IN LOOP (OBJECT)
// const instrument = {
//   name: 'tenor banjo',
//   type: 'string',
//   tuning: 'G2',
//   origin: 'USA',
//   year: 1904
// }

// for(let x in instrument){
//   console.log(x);
// }
// for(let x in instrument){
//   console.log(`${x} : ${instrument[x]}`);
// }

// // SPLITING UP A SENTENCE
// var words = sentence.split(' ');
// console.log(words);

// for(let x in words){
//   console.log(x);
// }
// for(let x in words){
//   console.log(`${x} : ${words[x]}`);
// }