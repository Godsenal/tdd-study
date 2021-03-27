class Dollar {
  amount = 0;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiply: number) {
    return new Dollar(this.amount * multiply);
  }
  isEqual(dollar: Dollar) {
    return this.amount === dollar.amount;
  }
}

export default Dollar;
