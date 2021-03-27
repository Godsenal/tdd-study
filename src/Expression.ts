import Money from "./Money";
import Sum from "./Sum";

interface Expression {
  plus(money: Money): Sum;
}

export default Expression;
