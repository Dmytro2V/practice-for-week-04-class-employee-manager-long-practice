Employee = require('./employee');
Manager = require('./manager');

hobbes = new Manager('Hobbes', 1000000, 'Founder', null)
calvin = new Manager('Calvin', 130000, 'Director', hobbes)
susie = new Manager('Susie', 100000, 'TA Manager', calvin)
lily = new Employee('Lily', 90000, 'TA', susie)
clifford = new Employee('Clifford', 90000, 'TA', susie)

console.log(hobbes.calculateBonus(0.05));
console.log(calvin.calculateBonus(0.05));
console.log(susie.calculateBonus(0.05));
console.log(lily.calculateBonus(0.05));
console.log(clifford.calculateBonus(0.05));