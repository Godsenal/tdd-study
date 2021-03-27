import Money from "./Money";
import Expression from "./Expression";
import Bank from "./Bank";

class Sum implements Expression {
  augend!: Money;
  addend!: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(bank: Bank, to: string) {
    return new Money(this.addend.amount + this.addend.amount, to);
  }
}

export default Sum;
