const fs = require('fs');
const questions = require('./questions')

// TODO: Include packages needed for this application


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, data), (error) =>
    error ? console.log('error') : console.log('done');
    
}

// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();
