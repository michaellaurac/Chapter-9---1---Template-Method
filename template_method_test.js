const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const Person = require("./template_method.js");

describe("tests run on the 'template_method.js' file:", () => {
  // has the right setup
  it("verifies the test file name", () => {
    wish(fileName() === "template_method_test.js");
  });
  // functional tests
  console.log(Person);
});
