class WasRun {
  wasRun: number | null;

  constructor(name: string) {
    this.wasRun = null;
  }

  testMethod() {
    this.wasRun = 1;
  }
}

export default WasRun;
