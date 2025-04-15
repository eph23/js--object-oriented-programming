'use strict';
/* NOTE: Prototypal Inheritance is a feature in JavaScript where an object can inherit properties and methods from another object through the [[Prototype]] chain (aka __proto__ or Object.getPrototypeOf()).

In short: One object can delegate behavior (methods/properties) to another object, which is its prototype.
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

console.log(eph.__proto__);
console.log(eph.__proto__.__proto__);
console.log(eph.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
