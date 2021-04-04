import Bank from "./Bank";
import Money from "./Money";
import { TOperator } from "./operate";
import Operator from "./Operator";

interface Expression {
  operate(operator: TOperator, money: Expression): Operator;
  reduce(bank: Bank, to: string): Money;
  times(mutliply: number): Expression;
}

export default Expression;
