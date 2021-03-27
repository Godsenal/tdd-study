import Expression from "./Expression";
import Money from "./Money";
import Pair from "./Pair";
import PairMap from "./PairMap";
import Sum from "./Sum";

class Bank {
  rates: PairMap = new PairMap();
  rate(from: string, to: string) {
    return this.rates.get(new Pair(from, to));
  }
  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to), rate);
  }
  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }
}

export default Bank;
