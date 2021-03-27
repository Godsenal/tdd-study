import Dollar from "./Dollar";
import Franc from "./Franc";

class MoneyFactory {
  static dollar(amount: number) {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number) {
    return new Franc(amount, "CHF");
  }
}

export default MoneyFactory;
