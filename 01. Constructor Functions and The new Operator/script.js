'use strict';
/* NOTE: A constructor function is a special function used to create and initialize an object in JavaScript's Object-Oriented Programming (OOP). It acts as a blueprint for creating multiple objects that share the same properties and methods. When you invoke a constructor function with the new keyword, it creates a new object and initializes it with the values provided inside the constructor function.
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
