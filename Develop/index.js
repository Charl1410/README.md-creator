
// TODO: Include packages needed for this application
const fs = require('fs');
const questions = require('./questions')


// TODO: Create a function to write README file
function writeToFile (data) {
    console.log(data);
    fs.writeFile('README.md', data), (error) =>
    error ? console.log('error') : console.log('done');
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'what would you like you project title to be called?',
            name: 'title',
            
        },
    
        {
            type: 'input',
            message: 'Provide a brief description of your project',
            name: 'description',
        },
    
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'initialisation',
            
        },
    
        {
            type: 'input',
            message: 'Provide example images (please provide the permalink to the file )',
            name: 'screenshot_links',
            
        },
    
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles',
            name: 'collaborators',
            
        },
    
        {
            type: 'list',
            message: 'which licence has been used?',
            choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License'],
            name: 'licence',
            
        },
        
        
    ])
        .then(response => {
            writeToFile(response)
        })
}
// Function call to initialize app
init();
