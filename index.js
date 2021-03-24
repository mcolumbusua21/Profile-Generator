const { prompt } = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const renderPage = require("./src/renderPage");
const inquirer = require("inquirer");
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

const askEngineerQuestions = () => {
  inquirer
    .prompt([
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
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "member",
        choices: ["Engineer", "Intern", "No more members"],
      },
    ])
    .then((data) => {
      console.log(data);
      switch (data.member) {
        case "Engineer":
          askEngineerQuestions();
          break;

        case "Intern":
          askInternQuestions();
          break;

        default:
          break;
      }
    });
};

const askInternQuestions = () => {
  inquirer.prompt([
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
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "member",
        choices: ["Engineer", "Intern", "No more members"],
      },
  ])
  .then((data) => {
    console.log(data);
    switch (data.member) {
      case "Engineer":
        askEngineerQuestions();
        break;

      case "Intern":
        askInternQuestions();
        break;

      default:
        break;
    };
});
};
// const overallQuestions = [
//   function () {
//     return {
//       type: "list",
//       message: "Which type of team member would you like to add?",
//       name: "member",
//       choices: ["Engineer", "Intern", "No more members"],
//     };
//   },
// ];

function askQuestions() {
  inquirer
    .prompt(managerQuestions)
    .then((data) => {
      console.log(".then --->", data);
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamArray.push(manager);
      console.log("TEAM ARRAY---> ", teamArray);
      // return askOverallQuestions()
    })
    .then(() => {
      inquirer
        .prompt({
          type: "list",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "No more members"],
          name: "title",
        })
        .then((answer) => {
          switch (answer.title) {
            case "Engineer":
              askEngineerQuestions();
                const engineer = new Engineer;
              break;

            case "Intern":
              inquirer
                askInternQuestions()
                const intern = new Intern;
                // .then((data) => console.log("intern data", data));
              break;
            default:
              console.log("No more stuff");
              break;
          };

        //   console.log("SECOND QUESTION--->", answer);
        });
    });
};


askQuestions();
