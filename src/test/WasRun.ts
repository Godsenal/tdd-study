import TestCase from "./TestCase";

class WasRun extends TestCase {
  wasRun: number | null;

  constructor(name: string) {
    super(name);
    this.wasRun = null;
  }

  testMethod() {
    this.wasRun = 1;
  }
}

export default WasRun;
