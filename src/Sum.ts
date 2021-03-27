import Money from "./Money";
import Expression from "./Expression";
import Bank from "./Bank";

class Sum implements Expression {
  augend!: Expression;
  addend!: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }
  plus(money: Expression): Sum {
    return new Sum(this, money);
  }
  times(multiply: number) {
    return new Sum(this.augend.times(multiply), this.addend.times(multiply));
  }
  reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;

    return new Money(amount, to);
  }
}

export default Sum;
