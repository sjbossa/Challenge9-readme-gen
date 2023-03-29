// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide a title for your project:",
    },
    {
        type: "input",
        name: "description"
        message: "Please provide a brief description of your project:",
    },
    {
        type: "input",
        name: "installation"
        message: "Please provide any steps required to install your project:",
    },
    {
        type: "input",
        name: "features"
        message: "Please provide a list of any important features of your project:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution instructions for your project:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any examples of how to run tests on your project:",
    },
    {
        type: "input",
        name: "usage"
        message: "Please provide any instructions and examples for your projects usage:",
    },
    {
        type: "input",
        name: "credits"
        message: "Please provide a list of collaborators on your project, if any, with links to their GitHub profiles:",
    },
    {
        type: "list",
        name: "licenses",
        message: "What type of license will you be using for your project?", 
        choices: ["MIT", "Apache license 2.0", "General Public License v3.0", "The Unlicense", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide a working contact email:",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
