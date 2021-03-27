import Money from "./Money";

interface Expression {
  plus(money: Money): Money;
}

export default Expression;
