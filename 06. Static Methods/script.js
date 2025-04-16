'use strict';

function User(name) {
  this.name = name;
}

// Static-like method
User.sayHi = function () {
  console.log('Hello from static method in constructor function!');
};

User.sayHi();

/* const ephS = new User('Eph');
ephS.sayHi(); */

class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this._birthYear = birthYear;
  }

  /* NOTE: A static method is a method that belongs to the class itself, not to instances (objects) of the class.

That means:

You call it directly on the class, not on an object created from the class.

It’s often used for utility functions, helper methods, or logic that doesn't need object data.
 */
  static hey() {
    console.log(`Hey there 👋👋👋`);
  }
  get age() {
    return 2037 - this._birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`The given name is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const eph = new PersonCl('Ephraim', 1988);
console.log(eph);

PersonCl.hey();
eph.hey();
