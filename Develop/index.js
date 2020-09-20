const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';
// array of questions for user
const questions = [
    { name: 'title', message:"What is project title?"},
    { name: 'description', message: 'Describe your project?'},
    { name: 'installation', message: 'Installation instructions?'},
    { name: 'usage', message: 'Usage instructions?'},
    { name: 'contributing', message: 'Contribution guidelines?'},
    { name: 'tests', message: 'Test instructions?'},
    { name: 'license', message: 'License?', type: 'list', choices: ['[MIT](https://opensource.org/licenses/MIT)', '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)', '[GNU GPLv3](https://opensource.org/licenses/GPL-3.0)', '[Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)', 'No licence'],},
    { name: 'github', message: 'Github username?'},
    { name: 'email', message: 'Email address?'},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
