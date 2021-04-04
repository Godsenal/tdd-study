import TestCase from "./TestCase";

class FailedSetUp extends TestCase {
  setUp() {
    throw new Error("failed setUp");
  }
  testMethod() {}
}

export default FailedSetUp;
