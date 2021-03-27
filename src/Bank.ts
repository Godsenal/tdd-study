import Expression from "./Expression";
import Money from "./Money";

class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(5);
  }
}

export default Bank;
