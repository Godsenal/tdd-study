import TestResult from "./TestResult";

class TestCase {
  [key: string]: any;
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  setUp() {}

  tearDown() {}

  run(result: TestResult) {
    result.testStarted();
    this.setUp();
    try {
      this[this.name]?.();
    } catch (e) {
      result.testFailed();
    }
    this.tearDown();
  }
}

export default TestCase;
