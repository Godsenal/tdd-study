abstract class Money {
  protected amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  abstract times(multiply: number): Money;

  isEqual(money: Money) {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }
}

export default Money;
