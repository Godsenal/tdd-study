import Bank from "./Bank";
import Expression from "./Expression";
import Sum from "./Sum";

class Money implements Expression {
  protected amount = 0;
  protected currency = "";

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }

  times(multiply: number) {
    return new Money(this.amount * multiply, this.currency);
  }

  isEqual(money: Money) {
    return this.amount === money.amount && this.currency === money.currency;
  }

  plus(money: Expression): Sum {
    return new Sum(this, money);
  }

  reduce(bank: Bank, to: string) {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  getCurrency() {
    return this.currency;
  }
}

export default Money;
