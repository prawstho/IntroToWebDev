// FETCH and READ the .json disk files

// fetch('./instruments.json')
//   .then(response => response.json())
//   .then(sound => {
//     // Do something with the JSON data
//     for(let i = 0; i < sound.length; i++){
//       console.log(sound[i].name); 
//     }
//   })
//   .catch(error => {
//     // Handle any errors that occur while fetching the file
//     console.error(error);
//   });

// // FETCH and READ the people.json disk file
// fetch('./people.json')
//   .then(response => response.json())
//   .then(person => {
//     // Access a specific value from the JSON data
//     console.log(person[0].fname);

//     // Loop through an array in the JSON data
//     person.forEach(person => {
//       console.log(person); // Log each person in the array to the console
//     });
//   })
//   .catch(error => {
//     // Handle any errors that occur while fetching the file
//     console.error(error);
//   });

fetch('./people.json')
  .then(response => response.json())
  .then(people => {
    // Loop through an array in the JSON data
    people.forEach(person => {
       changeRoom(person);
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function changeRoom(person) {
    switch(person.gender){
      case "female": 
        console.log(`${person.fname} should use the female change room.`);
        break;
      case "non-binary": 
        console.log(`${person.fname} should use the inclusive change room.`);
        break;
      case "male":
        console.log(`${person.fname} should use the male change room.`);
        break;
      default:
        console.log(`${person.fname} should be mindful in choosing a change room.`);
    }
  };