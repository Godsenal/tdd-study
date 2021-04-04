import assert from "assert";
import TestCase from "../TestCase";
import TestResult from "../TestResult";
import TestSuite from "../TestSuite";
import WasRun from "../WasRun";
import FailedSetUp from "../FailedSetUp";

class TestCaseTest extends TestCase {
  setUp() {
    this.result = new TestResult();
  }
  testResult() {
    const test = new WasRun("testMethod");
    test.run(this.result);

    assert("1 run, 0 failed" === this.result.summary());
  }
  testFailedResult() {
    const test = new WasRun("testBrokenMethod");
    test.run(this.result);

    assert("1 run, 1 failed" === this.result.summary());
  }
  testTemplatedMethod() {
    const test = new WasRun("testMethod");
    test.run(this.result);
    assert("setUp testMethod tearDown " === test.log);
  }
  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();

    assert("1 run, 1 failed" === this.result.summary());
  }
  testFailedTearDown() {
    const test = new WasRun("testBrokenMethod");
    test.run(this.result);

    assert("setUp tearDown " === test.log);
  }
  testFailedSetUp() {
    const test = new FailedSetUp("failed setUp");
    test.run(this.result);

    assert("1 run, 1 failed" === this.result.summary());
  }
  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testBrokenMethod"));

    suite.run(this.result);
    assert("2 run, 1 failed" === this.result.summary());
  }
  testSuiteSuite() {
    const suite = new TestSuite();
    const successSuite = new TestSuite();
    const failSuite = new TestSuite();

    successSuite.add(new WasRun("testMethod"));
    successSuite.add(new WasRun("testMethod"));
    failSuite.add(new WasRun("testBrokenMethod"));

    suite.add(successSuite);
    suite.add(failSuite);

    suite.run(this.result);

    assert("3 run, 1 failed" === this.result.summary());
  }
}

const suite = new TestSuite();

suite.add(new TestCaseTest("testTemplatedMethod"));
suite.add(new TestCaseTest("testResult"));
suite.add(new TestCaseTest("testFailedResultFormatting"));
suite.add(new TestCaseTest("testFailedResult"));
suite.add(new TestCaseTest("testFailedTearDown"));
suite.add(new TestCaseTest("testFailedSetUp"));
suite.add(new TestCaseTest("testSuite"));
suite.add(new TestCaseTest("testSuiteSuite"));

const result = new TestResult();
suite.run(result);

console.log(result.summary());
