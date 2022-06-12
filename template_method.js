class Person {
  constructor (typeOfPerson) {
    this.typeOfPerson = typeOfPerson;
  };

  whatIs (number) { return number; };

  whatIsInBinary (number) { return Number("0b" + number); };

  log (number) {
    if (this.typeOfPerson === "binary knower") {
      return this.whatIsInBinary(number);
    } else {
      return this.whatIs(number);
    }
  };
};

module.exports = Person;
