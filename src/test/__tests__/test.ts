import assert from "assert";
import TestCase from "../TestCase";
import WasRun from "../WasRun";

class TestCaseTest extends TestCase {
  setUp() {
    this.test = new WasRun("testMethod");
  }
  testRunning() {
    this.test.run();
    assert(this.test.wasRun);
    assert("setUp testMethod" === this.test.log);
  }
  testSetUp() {
    this.test.run();
    assert(this.test.wasSetUp);
  }
}

new TestCaseTest("testRunning").run();
new TestCaseTest("testSetUp").run();
