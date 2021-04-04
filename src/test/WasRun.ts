import TestCase from "./TestCase";

class WasRun extends TestCase {
  wasRun: number | null;
  wasSetUp: number | null;

  constructor(name: string) {
    super(name);
    this.wasRun = null;
    this.wasSetUp = null;
  }

  setUp() {
    this.wasRun = null;
    this.wasSetUp = 1;
  }

  testMethod() {
    this.wasRun = 1;
  }
}

export default WasRun;
