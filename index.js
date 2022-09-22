class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title=title;
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

class Manager extends Employee {
  constructor (name, salary, title, manager, employees = []) {
   super (name, salary, title, manager)
   this.employees = employees;  
  }

  addEmployee(employee) {
    this.employees.push(employee); 
  }

  calculateBonus(multiplier) {
    return (this.salary + Manager._totalSubSalary(this)) * multiplier
  }
  static _totalSubSalary(manager) {
    let sum = 0;
    for (const employee of manager.employees) {
      sum += employee.salary;
      if (employee instanceof Manager) sum += Manager._totalSubSalary(employee);
    }
    return sum;
  }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
console.log('splinter', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
console.log(donnie.calculateBonus(0.15));//12750  

/*
 const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

//splinter.addEmployee(leo);
//splinter.addEmployee(mikey);
//.addEmployee(donnie);
//splinter.addEmployee(raph);

console.log('After: ', splinter);
*/
