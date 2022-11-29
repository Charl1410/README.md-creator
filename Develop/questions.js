const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

inquirer.prompt ([
    {
        type: 'input',
        message: 'what would you like you project title to be called?',
        name: 'project_name',
        
    },

    {
        type: 'input',
        message: 'Provide a brief description of your project',
        name: 'Description',
    },

    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'initialisation',
        
    },

    {
        type: 'input',
        message: 'Provide example images (please provide the permalink to the file)',
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
        console.log(response)
    })


module.exports = {
    questions
}