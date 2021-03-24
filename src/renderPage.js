// const { divide } = require("lodash");

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
                                  <li class="list-group-item"> Office Number: ${teamArray[i].number}</li>
                                  <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                              </ul>
                          </div>
                      </div>`;
    } else if (teamArray[i].role === "Engineer") {
      employees += `
                      <div class= "card employee-card" id="Engineer">
                          <div class= "card-header">
                              <h2 class= "card-title">${teamArray[i].name}</h2>
                              <h3 class= "card-title"><i class="fas fa-mug-hot mr-2"></i>${teamArray[i].role}</h3>
                          </div>
                          <div class="card-body">
                              <ul class="list-group">
                                  <li class="list-group-item"> ID: ${teamArray[i].id}</li>
                                  <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                                  <li class="list-group-item"> GitHub: <a href="https://github.com/${teamArray[i].github}" target="_blank">${teamArray[i].github}</a></li>
                              </ul>
                          </div>
                      </div>`;
    } else {
      employees += `
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
      
    }
  }
return (employees)
}

module.exports = renderPage;
