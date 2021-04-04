class TestCase {
  [key: string]: any;
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  setUp() {}

  tearDown() {}

  run() {
    this.setUp();
    this[this.name]?.();
    this.tearDown();
  }
}

export default TestCase;
