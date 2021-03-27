import Bank from "./Bank";
import Money from "./Money";
import Sum from "./Sum";

interface Expression {
  plus(money: Expression): Sum;
  reduce(bank: Bank, to: string): Money;
  times(mutliply: number): Expression;
}

export default Expression;
