class WasRun {
  [key: string]: any;
  name: string = "";
  wasRun: number | null;

  constructor(name: string) {
    this.name = name;
    this.wasRun = null;
  }

  run() {
    this[this.name]?.();
  }

  testMethod() {
    this.wasRun = 1;
  }
}

export default WasRun;
