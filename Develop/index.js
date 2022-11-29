
// TODO: Include packages needed for this application
const fs = require('fs');
const questions = require('./questions');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create a function to write README file
function writeToFile (template) {
    console.log(template);
    fs.writeFile('README.md', template), (error) =>
    error ? console.log('error') : console.log('done');
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'what is your Github username?',
            name: 'github_name',
            
        },

        {
            type: 'input',
            message: 'Please provide a link to your Github profile',
            name: 'github_profile_link',
            
        },

        {
            type: 'input',
            message: 'Please enter your email',
            name: 'email',
            
        },
        
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
            name: 'usage',
            
        },
    
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles',
            name: 'contributing',
            
        },
        
        {
            type: 'input',
            message: 'Please provide instructions for usage',
            name: 'test_instructions',
            
        },

    
        {
            type: 'list',
            message: 'which licence has been used?',
            choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License'],
            name: 'licence',
            
        },
        
        
    ])
        .then(response => {
            generateMarkdown(response)
        })

    //generateMarkdown(response)
}
// Function call to initialize app
init();
