// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions')


/*
What is your GitHub username? github
What is your email address? email
What is your project's name? title
Please write a short description of your project. description
What kind of license should your project have? license
What command should be run to install dependencies? install
What command should be run to run tests? testing
What does the user need to know about using the repo? usage
What does the user need to know about contributing to the repo? contributing
*/

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile(
        "./output/README.md", // file name
        data, // content to write
        (err) => 
        err ? console.error(err) : console.log('Generating Readme...') //call back function
      );
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(generateMarkdown(answers));
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

