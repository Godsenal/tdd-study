class TestCase {
  [key: string]: any;
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  run() {
    this[this.name]?.();
  }
}

export default TestCase;
