import Money from "./Money";
import MoneyFactory from "./MoneyFactory";

class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiply: number) {
    return MoneyFactory.dollar(this.amount * multiply);
  }
}

export default Dollar;
