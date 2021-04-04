import TestResult from "./TestResult";

interface Test {
  run(result: TestResult): void;
}

export default Test;
