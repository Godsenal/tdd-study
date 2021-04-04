import TestCase from "../TestCase";
import WasRun from "../WasRun";

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun("testMethod");
    console.log(test.wasRun);
    test.run();
    console.log(test.wasRun);
  }
}

new TestCaseTest("testRunning").run();
