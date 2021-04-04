import assert from "assert";
import TestCase from "../TestCase";
import TestResult from "../TestResult";
import TestSuite from "../TestSuite";
import WasRun from "../WasRun";

class TestCaseTest extends TestCase {
  testResult() {
    const test = new WasRun("testMethod");
    const result = new TestResult();
    test.run(result);

    assert("1 run, 0 failed" === result.summary());
  }
  testFailedResult() {
    const test = new WasRun("testBrokenMethod");
    const result = new TestResult();
    test.run(result);

    assert("1 run, 1 failed" === result.summary());
  }
  testTemplatedMethod() {
    const test = new WasRun("testMethod");
    const result = new TestResult();
    test.run(result);
    assert("setUp testMethod tearDown " === test.log);
  }
  testFailedResultFormatting() {
    const result = new TestResult();

    result.testStarted();
    result.testFailed();

    assert("1 run, 1 failed" === result.summary());
  }
  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testBrokenMethod"));

    const result = new TestResult();
    suite.run(result);
    assert("2 run, 1 failed" === result.summary());
  }
}

const suite = new TestSuite();

suite.add(new TestCaseTest("testTemplatedMethod"));
suite.add(new TestCaseTest("testResult"));
suite.add(new TestCaseTest("testFailedResultFormatting"));
suite.add(new TestCaseTest("testFailedResult"));
suite.add(new TestCaseTest("testSuite"));

const result = new TestResult();
suite.run(result);

console.log(result.summary());
