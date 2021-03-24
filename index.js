const fs = require("fs");
const path = require("path");
const childproc = require("child_process");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const renderPage = require("./src/renderPage");
const inquirer = require("inquirer");
// const { listenerCount } = require("node:events");

const teamArray = [];

function questionCallback(role) {
  console.log(role);
  if (role === "Engineer") {
    return askEngineerQuestions();
  } else if (role === "Intern") {
    return askInternQuestions();
  } else {
    console.log(teamArray);
    const html = fs.readFileSync(
      path.join(__dirname, "template.html"),
      "utf-8"
    );

    const newHtml = html.replace("[teamArray]", renderPage(teamArray));

    fs.writeFileSync(path.join(__dirname, "index.html"), newHtml);
    if (fs.existsSync(path.join(__dirname, "index.html"))) {
      childproc.exec('open -a "Google Chrome" index.html');
    }
    process.exit(0);
  }
}

const askManagerQuestions = () => {
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

  return inquirer.prompt(managerQuestions).then((answers) => {
    teamArray.push({
      ...answers,
      role: "Manager",
    });
   

    return inquirer
      .prompt({
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more members"],
        name: "role",
      })
      .then(({ role }) => questionCallback(role));
  });
};

const askEngineerQuestions = () => {
  return inquirer
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
        name: "role",
        choices: ["Engineer", "Intern", "No more members"],
      },
    ])
    .then(({ role, ...data }) => {
      teamArray.push({
        ...data,
        role: "Engineer",
      });
      return questionCallback(role);
    });
};

const askInternQuestions = () => {
  return inquirer
    .prompt([
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
        name: "role",
        choices: ["Engineer", "Intern", "No more members"],
      },
    ])
    .then(({ role, ...data }) => {
      teamArray.push({
        ...data,
        role: "Intern",
      });
      return questionCallback(role);
    });
};

askManagerQuestions()
  .then(() => askInternQuestions())
  .then(() => askQuestions())
  .then(() => renderPage());
