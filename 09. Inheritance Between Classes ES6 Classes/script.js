'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this._birthYear = birthYear;
  }

  static hey() {
    console.log(`Hey there 👋👋👋`);
  }

  calcAge() {
    console.log(2037 - this._birthYear);
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2037 - this._birthYear} years old`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
