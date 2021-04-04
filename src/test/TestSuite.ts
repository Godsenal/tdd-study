import TestCase from "./TestCase";
import TestResult from "./TestResult";

class TestSuite {
  tests: (TestCase | TestSuite)[];
  constructor() {
    this.tests = [];
  }
  add(test: TestCase | TestSuite) {
    this.tests.push(test);
  }
  run(result: TestResult) {
    this.tests.forEach((test) => test.run(result));
  }
}

export default TestSuite;
