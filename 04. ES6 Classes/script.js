'use strict';
/* NOTE: An ES6 class is a syntactic sugar over JavaScript’s existing prototype-based inheritance.
It allows you to create objects, define methods, and implement inheritance with a cleaner, more familiar syntax (like Java, C++).

Under the hood, it's still prototype-based — just looks like classical OOP!
 */

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const eph = new PersonCl('Ephraim', 1988);
console.log(eph);
eph.calcAge();

console.log(eph.__proto__ === PersonCl.prototype);

eph.greet();
