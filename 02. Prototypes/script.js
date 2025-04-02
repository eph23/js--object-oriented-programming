'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* NOTE: While it is possible to define methods inside a constructor function, it’s generally not recommended to do so for performance and efficiency reasons. Let’s go over why this practice might not be ideal.
   */
};

const eph = new Person('Eph', 1988);
console.log(eph);

console.log(eph instanceof Person);

// Prototypes
/* NOTE: To solve the inefficiency problem, we can define methods on the prototype of the constructor function. Every object created with that constructor will share a single copy of the method, rather than creating a new one for each instance.
 */

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

eph.calcAge();
console.log(eph.__proto__);
console.log(eph.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(eph));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(eph.species);

console.log(eph.hasOwnProperty('firstName'));
console.log(eph.hasOwnProperty('species'));
