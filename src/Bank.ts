import Expression from "./Expression";
import Pair from "./Pair";
import PairMap from "./PairMap";

class Bank {
  rates: PairMap = new PairMap();
  rate(from: string, to: string) {
    return from === to ? 1 : this.rates.get(new Pair(from, to));
  }
  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to), rate);
  }
  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }
}

export default Bank;
