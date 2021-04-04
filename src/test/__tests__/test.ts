import assert from "assert";
import TestCase from "../TestCase";
import WasRun from "../WasRun";

class TestCaseTest extends TestCase {
  testTemplatedMethod() {
    const test = new WasRun("testMethod");
    test.run();
    assert("setUp testMethod tearDown " === test.log);
  }
}

new TestCaseTest("testTemplatedMethod").run();
