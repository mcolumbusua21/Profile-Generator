const { prompt } = require ("inquirer");
const fs = require ("fs");

const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

const renderPage = require("./src/renderPage");

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