// FETCH and READ the .json disk files

fetch('./instruments.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the JSON data
    for(let i = 0; i < data.length; i++){
      console.log(data[i].name); 
    }
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

// // FETCH and READ the people.json disk file
// fetch('./people.json')
//   .then(response => response.json())
//   .then(data => {
//     // Access a specific value from the JSON data
//     console.log(data[0].fname);

//     // Loop through an array in the JSON data
//     data.forEach(person => {
//       console.log(person); // Log each person in the array to the console
//     });
//   })
//   .catch(error => {
//     // Handle any errors that occur while fetching the file
//     console.error(error);
//   });

// fetch('./people.json')
//   .then(response => response.json())
//   .then(people => {
//     // Do something with the JSON data
//     console.log(people); // Log the JSON data to the console

//     // Access a specific value from the JSON data
//     console.log(people[0].fname);

//     // Loop through an array in the JSON data
//     people.forEach(person => {
//       console.log(person); // Log each person in the array to the console
//       switch(person.gender){
//         case "female": 
//           console.log(`${person.fname} should use the female change room.`);
//           break;
//         case "non-binary": 
//           console.log(`${person.fname} should use the inclusive change room.`);
//           break;
//         case "male":
//           console.log(`${person.fname} should use the male change room.`);
//           break;
//         default:
//           console.log(`${person.fname} should be mindful in choosing a change room.`);
//       }
//     });
//   })
//   .catch(error => {
//     // Handle any errors that occur while fetching the file
//     console.error(error);
//   });