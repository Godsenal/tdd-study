import WasRun from "../WasRun";

const test = new WasRun("testMethod");
console.log(test.wasRun);
test.testMethod();
console.log(test.wasRun);
