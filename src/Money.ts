class Money {
  protected amount = 0;

  isEqual(money: Money) {
    return this.amount === money.amount;
  }
}

export default Money;
