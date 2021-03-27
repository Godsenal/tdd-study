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
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;

    return new Money(amount, to);
  }
}

export default Sum;
