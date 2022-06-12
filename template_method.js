class Person {
  constructor (binaryKnower) {
    this.binaryKnower = binaryKnower;
  };

  whatIs (number) { return number; };
  whatIsInBinary (number) { return Number("0b" + number); };
};

module.exports = Person;
