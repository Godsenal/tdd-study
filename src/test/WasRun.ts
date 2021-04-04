import TestCase from "./TestCase";

class WasRun extends TestCase {
  wasRun: number | null;
  wasSetUp: number | null;
  log: string = "";

  constructor(name: string) {
    super(name);
    this.wasRun = null;
    this.wasSetUp = null;
  }

  setUp() {
    this.wasRun = null;
    this.wasSetUp = 1;
    this.log = "setUp ";
  }

  testMethod() {
    this.wasRun = 1;
    this.log = this.log + "testMethod";
  }
}

export default WasRun;
