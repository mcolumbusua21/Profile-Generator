const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.school = "school name";
    this.role = "Intern";
  }

  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Intern;