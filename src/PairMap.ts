import Pair from "./Pair";

class PairMap extends Map {
  get(pair: Pair) {
    return super.get(pair.key);
  }
  set(pair: Pair, v: number) {
    super.set(pair.key, v);

    return this;
  }
}

export default PairMap;
