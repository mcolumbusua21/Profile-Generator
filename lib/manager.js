const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.officeNumber = "office number";
    this.role = "Manager";
  }

  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Manager;