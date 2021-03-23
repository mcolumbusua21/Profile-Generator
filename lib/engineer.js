const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Engineer;