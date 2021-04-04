import Test from "./Test";
import TestResult from "./TestResult";

class TestCase implements Test {
  [key: string]: any;
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  setUp() {}

  tearDown() {}

  run(result: TestResult) {
    result.testStarted();
    try {
      this.setUp();
      this[this.name]?.();
    } catch (e) {
      result.testFailed();
    }
    this.tearDown();
  }
}

export default TestCase;
