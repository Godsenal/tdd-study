class TestCase {
  [key: string]: any;
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  setUp() {}

  run() {
    this.setUp();
    this[this.name]?.();
  }
}

export default TestCase;
