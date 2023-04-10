// read the file from disk
fetch('./people.json')
// convert file into JSON structure
  .then(response => response.json())
  // put date into a named variable array (people)
  .then(people => {
    // Loop through the array as JSON data
    people.forEach(person => {
      // write a message while accessing each arry object
       console.log(`Welcome ${person.fname} ${person.lname}.`);
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });