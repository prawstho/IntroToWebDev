// FETCH and READ the array.json disk file

fetch('./instruments.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the JSON data
    console.log(data); // Log the JSON data to the console
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

// FETCH and READ the people.json disk file
/*
fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the JSON data
    console.log(data); // Log the JSON data to the console

    // Access a specific value from the JSON data
    console.log(data[0].fname);

    // Loop through an array in the JSON data
    data.forEach(person => {
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
      console.log(person); // Log each person in the array to the console
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });
  */
