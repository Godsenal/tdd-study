import TestResult from "./TestResult";

class TestCase {
  [key: string]: any;
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  setUp() {}

  tearDown() {}

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();
    try {
      this[this.name]?.();
    } catch (e) {
      result.testFailed();
    }
    this.tearDown();

    return result;
  }
}

export default TestCase;
