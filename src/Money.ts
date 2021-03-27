abstract class Money {
  protected amount = 0;
  protected currency = "";

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  abstract times(multiply: number): Money;

  isEqual(money: Money) {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  getCurrency() {
    return this.currency;
  }
}

export default Money;
