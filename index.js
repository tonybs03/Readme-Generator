// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


const promptUser = () => {
  return inquirer.prompt(questions)
};

// array of questions for user
const questions = [
  {
    message: "What is your project title? (Use dash for space)",
    type: "input",
    name: "projectTitle",
  },
  {
    message: "How would you describe the purpose of your project in a few words?",
    type: "input",
    name: "projectDes",
  },
  {
    message: "How do you install the required packages? (Start/end with ```)",
    type: "input",
    name: "install",
  },
  {
    message: "How do you initiate the application? (Start/end with ```)",
    type: "input",
    name: "usage",
  },
  {
    message: "Please choose your applied licenses for your project.",
    type: "list",
    choices: ["Apache2.0", "GPLv3", "MIT", "None"],
    name: "license",
  },
  {
    message: "What needs to be known about contributing to the Project?",
    type: "input",
    name: "contribution",
  },
  {
    message: "Any testing instructions?",
    type: "input",
    name: "testing",
  },
  {
    message: "Please enter your GitHub Username.",
    type: "input",
    name: "username",
  },
  {
    message: "Please enter your email address.",
    type: "input",
    name: "email",
  }
];

function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
      if(err) {console.log(err)}
      else {console.log("Success!")}
    })
  };


function init() {
    promptUser().then(data => {
      data.username = "https://github.com/" + data.username;
      var returnedContent = generateMarkdown(data);
      writeToFile("./README.md", returnedContent);
    })
}


// Function call to initialize app
init();
