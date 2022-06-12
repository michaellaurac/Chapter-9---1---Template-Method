class Person {}

class BinaryKnower extends Person {
  whatIsInBinary (number) { return Number("0b" + number); };

  read (number) {
    return this.whatIsInBinary(number);
  };
};

class BinaryOblivious extends Person {
  whatIs (number) { return number; };

  read (number) {
    return this.whatIs(number);
  };
};

module.exports = { BinaryKnower, BinaryOblivious };
