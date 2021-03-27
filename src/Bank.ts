import Money from "./Money";
import Sum from "./Sum";

class Bank {
  reduce(source: Sum, to: string) {
    return source.reduce(to);
  }
}

export default Bank;
