var router = require('express').Router();
//Here is the list of students to send
var students = [
  "Andrew Kolander",
  "Anthony Maki",
  "Brian Anderson",
  "Brian Verduzco",
  "Connor O'Gara",
  "Cormac Strahan",
  "Donovan Goertzen",
  "Hillary Manning",
  "Jon Wilson",
  "Justin Doty",
  "Katie Vogel",
  "Kyle Quamme",
  "Liz Kerber",
  "Megan Martinson",
  "Richard Camara",
  "Ryan Mattson",
  "Sahasha Reese",
  "Tracy Vincent",
  "Trent Johnson"
];


// Here I am sending the list as a response whenever the /students URL is requested
router.get('/', function(request, response){
  response.send(students);
  console.log('Here is what I am sending: ', students);
});

// NEVER FORGET TO EXPORT.
module.exports = router;
