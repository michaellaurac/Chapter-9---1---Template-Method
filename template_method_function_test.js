const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { read, BinaryKnower, BinaryOblivious } = require("./template_method_function.js");

describe("tests run on the 'template_method_function.js' file:", () => {
  // setup
  it("verifies the test file name", () => {
    wish(fileName() === "template_method_function_test.js");
  });
  // initialisation
  const personOne = new BinaryKnower();
  const personTwo = new BinaryOblivious();
  // functional tests
  it("checks that '10' is understood as '2' for a binary knower", () => {
    wish(read(personOne, 10) === 2);
  });
  it("checks that '10' is understood as '10' for a binary oblivious", () => {
    wish(read(personTwo, 10) === 10);
  });
});
