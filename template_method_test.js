const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { BinaryKnower, BinaryOblivious } = require("./template_method.js");

describe("tests run on the 'template_method.js' file:", () => {
  // has the right setup
  it("verifies the test file name", () => {
    wish(fileName() === "template_method_test.js");
  });
  // initialisation
  const personOne = new BinaryKnower();
  const personTwo = new BinaryOblivious();
  // functional tests
  it("checks that '10' is understood as '2' for a binary knower", () => {
    wish(personOne.read(10) === 2);
  });
  it("checks that '10' is understood as '10' for a binary oblivious", () => {
    wish(personTwo.read(10) === 10);
  });
});
