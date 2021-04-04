import TestCase from "./TestCase";
import TestResult from "./TestResult";

class TestSuite {
  tests: TestCase[];
  constructor() {
    this.tests = [];
  }
  add(test: TestCase) {
    this.tests.push(test);
  }
  run() {
    const result = new TestResult();

    this.tests.forEach((test) => test.run(result));

    return result;
  }
}

export default TestSuite;
