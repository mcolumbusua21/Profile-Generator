const {prompt} = require ("inquirer");
const fs = require ("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const renderPage = require("./src/renderPage");
// const { listenerCount } = require("node:events");

const teamArray = [];

const managerQuestions = [
    {
        type: "input",
        message: "Please enter the name of the manager:",
        name: "name",

    },
    {
        type: "input",
        message: "Please enter the managers employee ID number:",
        name: "id",

    },
    {
        type: "input",
        message: "Please enter the managers email address:",
        name: "email",

    },
    {
        type: "input",
        message: "Please enter the office number:",
        name: "office number",

    },
   
];
const engineerQuestions = [
    {
        type: "input",
        message: "Please enter the name of the engineer:",
        name: "name",

    },
    {
        type: "input",
        message: "Please enter the engineers employee ID number:",
        name: "id",

    },
    {
        type: "input",
        message: "Please enter the engineers email address:",
        name: "email",

    },
    {
        type: "input",
        message: "Please enter the engineers GitHub username:",
        name: "github",

    },
];
const internQuestions = [
    {
        type: "input",
        message: "Please enter the name of the intern:",
        name: "name",

    },
    {
        type: "input",
        message: "Please enter the interns employee ID number:",
        name: "id",

    },
    {
        type: "input",
        message: "Please enter the interns email address:",
        name: "email",

    },
    {
        type: "input",
        message: "Please enter the name of the school the intern is attending:",
        name: "school",

    },
];

const overallQuestions = [
     function (){
        return {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "member",
            choices: ["Engineer", "Intern", "No more members"]
        }
    },
];

function askQuestions () {
    prompt(managerQuestions).then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );
        teamArray.push(manager);
        return askOverallQuestions ()
    });
};