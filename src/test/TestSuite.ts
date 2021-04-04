import Test from "./Test";
import TestCase from "./TestCase";
import TestResult from "./TestResult";

class TestSuite implements Test {
  tests: Test[];
  constructor() {
    this.tests = [];
  }
  add(test: Test) {
    this.tests.push(test);
  }
  run(result: TestResult) {
    this.tests.forEach((test) => test.run(result));
  }
}

export default TestSuite;
