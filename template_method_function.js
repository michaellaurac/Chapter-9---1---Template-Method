function read (person, number) { return person.whatIs(number); };

class BinaryKnower { whatIs (number) { return Number("0b" + number); }};
class BinaryOblivious { whatIs (number) { return number; }};

module.exports = { read, BinaryKnower, BinaryOblivious };
