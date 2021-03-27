import Bank from "./Bank";
import Money from "./Money";
import Sum from "./Sum";

interface Expression {
  plus?(money: Money): Sum;
  reduce(bank: Bank, to: string): Money;
}

export default Expression;
