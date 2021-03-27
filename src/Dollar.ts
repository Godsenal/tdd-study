import Money from "./Money";

class Dollar extends Money {
  protected amount = 0;
  constructor(amount: number) {
    super();
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
