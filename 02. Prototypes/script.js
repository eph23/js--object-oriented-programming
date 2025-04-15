'use strict';
/* NOTE: In JavaScript, every object has an internal link to another object called its prototype. This prototype object can have methods and properties that the original object can access through something called the prototype chain.

In short: Prototypes are like blueprints that other objects can inherit from.
 */

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Ephraim', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda);
console.log(jack);

console.log(eph instanceof Person);

// Prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
eph.calcAge();

console.log(eph.__proto__);
console.log(eph.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(eph));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(eph.species);
console.log(matilda.species);

console.log(eph.hasOwnProperty('firstName'));
console.log(eph.hasOwnProperty('species'));
