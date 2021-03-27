class Pair {
  from!: string;
  to!: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  get key() {
    return [this.from, this.to].join("_");
  }
}

export default Pair;
