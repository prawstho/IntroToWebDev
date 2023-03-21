const instrument = 'ukelele';

switch(instrument){
  case 'mandolin':
    console.log(`play - Iris.`);
    break;
  case 'guitar':
    console.log(`play - All along the watchtower.`);
    break;
  case 'ukelele':
    console.log(`play - Riptide.`);
    break;
  case 'banjo':
    console.log(`play - Powerless.`);
    break;
  default:
    console.log(`play what you want.`);   
}

let day;
switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
};
console.log(`today is ${day}.`)

switch(new Date().getDay()){
  case 0:
  case 6:
    console.log('Weekend Day.');
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('Week Day.')
};