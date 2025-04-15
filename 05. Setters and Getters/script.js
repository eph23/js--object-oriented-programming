'use strict';

const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  /* NOTE: In JavaScript, a setter is a special method that allows you to set (or modify) the value of an object’s property. Setters are typically used when you want to add logic or restrictions when changing an object’s property value. */
  get latest() {
    return this.movements.slice(-1).pop();
  },

  /* NOTE: In JavaScript, a getter is a method that allows you to retrieve or access the value of an object’s property. It’s like a custom function that gets called automatically when you try to access the property.
   */

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 23.5;

console.log(account.latest);

class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this._birthYear = birthYear;
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

console.log(eph.age);
eph.fullName = 'Eph';
console.log(eph);

const walter = new PersonCl('Walter White', 1963);
console.log(walter);
