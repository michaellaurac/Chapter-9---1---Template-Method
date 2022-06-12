class Person {
  read (number) {
    return this.whatIs(number);
  };
}

class BinaryKnower extends Person {
  whatIs (number) { return Number("0b" + number); };
};

class BinaryOblivious extends Person {
  whatIs (number) { return number; };
};

module.exports = { BinaryKnower, BinaryOblivious };
