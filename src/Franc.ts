import Money from "./Money";
import MoneyFactory from "./MoneyFactory";

class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiply: number) {
    return MoneyFactory.franc(this.amount * multiply);
  }
}

export default Franc;
