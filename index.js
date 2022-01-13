// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions')



// Function to write README file
const writeToFile = (data) => {
    fs.writeFile(
        "./output/README.md", // file name
        data, // content to write
        (err) => 
        err ? console.error(err) : console.log('Generating Readme...') //call back function
      );
}

// Function to initialize app
const init = () => {
    inquirer
        // Inquirer prompt questions.
        .prompt(questions)
        // Then generate markdown and write file based off inquirer answers.
        .then((answers) => {
            writeToFile(generateMarkdown(answers));
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            };
        });
};

// Function call to initialize app
init();

