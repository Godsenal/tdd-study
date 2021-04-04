class TestResult {
  runCount: number;
  constructor() {
    this.runCount = 1;
  }
  summary() {
    return `${this.runCount} run, 0 failed`;
  }
}

export default TestResult;
