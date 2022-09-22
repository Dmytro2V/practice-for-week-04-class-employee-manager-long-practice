class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;
    if (manager) {
      manager.addEmployee(this);     
    }     
  }
  calculateBonus(multiplier)  {
    let bonus = (this.salary) * multiplier;
    return bonus;
  }
}

module.exports = Employee


//Manager = require('./manager.js')
//const leo = new Employee('Leonardo', 90000, 'Ninja', 'splinter');
//console.log(leo)

