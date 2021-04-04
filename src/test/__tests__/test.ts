import assert from "assert";
import TestCase from "../TestCase";
import TestResult from "../TestResult";
import WasRun from "../WasRun";

class TestCaseTest extends TestCase {
  testResult() {
    const test = new WasRun("testMethod");
    const result = test.run();

    assert("1 run, 0 failed" === result.summary());
  }
  testFailedResult() {
    const test = new WasRun("testBrokenMethod");
    const result = test.run();

    assert("1 run, 1 failed" === result.summary());
  }
  testTemplatedMethod() {
    const test = new WasRun("testMethod");
    test.run();
    assert("setUp testMethod tearDown " === test.log);
  }
  testFailedResultFormatting() {
    const result = new TestResult();

    result.testStarted();
    result.testFailed();

    assert("1 run, 1 failed" === result.summary());
  }
}

new TestCaseTest("testTemplatedMethod").run();
new TestCaseTest("testResult").run();
new TestCaseTest("testFailedResult").run();
