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

    const newHtml = html.replace("[teamArray]", JSON.stringify(teamArray));

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
    function renderPage(teamArray) {
      let employees = "";
      for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].role === "Manager") {
          employees += `
                        <div class= "card employee-card" id="Manager">
                            <div class= "card-header">
                                <h2 class= "card-title">${teamArray[i].name}</h2>
                                <h3 class= "card-title"><i class="fas fa-mug-hot mr-2"></i>${teamArray[i].role}</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item"> ID: ${teamArray[i].id}</li>
                                    <li class="list-group-item"> Office Number: ${teamArray[i].officeNumber}</li>
                                    <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].email}">${team[i].email}</a></li>
                                </ul>
                            </div>
                        </div>`;
        } else if (teamArray[i].role === "Engineer") {
          emlpoyees += `
                        <div class= "card employee-card" id="Engineer">
                            <div class= "card-header">
                                <h2 class= "card-title">${teamArray[i].name}</h2>
                                <h3 class= "card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item"> ID: ${teamArray[i].id}</li>
                                    <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                                    <li class="list-group-item"> GitHub: <a href="http://github.com/:${teamArray[i].github}"> target="_blank">${teamArray[i].github}</a></li>
                                </ul>
                            </div>
                        </div>`;
          emlpoyees += `
                        <div class= "card employee-card" id="Engineer">
                            <div class= "card-header">
                                <h2 class= "card-title">${teamArray[i].name}</h2>
                                <h3 class= "card-title"><i class="fas fa-mug-hot mr-2"></i>${teamArray[i].role}</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item"> ID: ${teamArray[i].id}</li>
                                    <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                                    <li class="list-group-item"> GitHub: <a href="http://github.com/:${teamArray[i].github}"> target="_blank">${teamArray[i].github}</a></li>
                                </ul>
                            </div>
                        </div>`;
        } else {
          emlpoyees += `
                    <div class= "card employee-card" id="Intern">
                        <div class= "card-header">
                            <h2 class= "card-title">${teamArray[i].name}</h2>
                            <h3 class= "card-title"><i class="fas fa-mug-hot mr-2"></i>${teamArray[i].role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item"> ID: ${teamArray[i].id}</li>
                                <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                                <li class="list-group-item"> School: ${teamArray[i].school}</li>
                            </ul>
                        </div>
                    </div>`;
          let = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="script.js"></script>
                <link rel="stylesheet" href="./style.css">
                <title>Profile Generator</title>
            </head>
            <body>
                
            </body>
            </html>
            `;
        }
      }
    }

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
