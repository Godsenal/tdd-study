import assert from "assert";
import TestCase from "../TestCase";
import WasRun from "../WasRun";

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun("testMethod");
    assert(!test.wasRun);
    test.run();
    assert(test.wasRun);
  }
}

new TestCaseTest("testRunning").run();
