import Money from "./Money";
import Expression from "./Expression";
import Bank from "./Bank";
import { operate, TOperator } from "./operate";

class Operator implements Expression {
  augend!: Expression;
  addend!: Expression;
  operator!: TOperator;
  constructor(augend: Expression, operator: TOperator, addend: Expression) {
    this.augend = augend;
    this.operator = operator;
    this.addend = addend;
  }
  operate(operator: TOperator, money: Expression): Operator {
    return new Operator(this, operator, money);
  }
  times(multiply: number) {
    return new Operator(
      this.augend.times(multiply),
      this.operator,
      this.addend.times(multiply)
    );
  }
  reduce(bank: Bank, to: string) {
    const amount = operate(
      this.operator,
      this.augend.reduce(bank, to).getAmount(),
      this.addend.reduce(bank, to).getAmount()
    );

    return new Money(amount, to);
  }
}

export default Operator;
