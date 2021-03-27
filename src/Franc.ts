import Money from "./Money";

class Franc extends Money {
  protected amount = 0;
  constructor(amount: number) {
    super();
    this.amount = amount;
  }
  times(multiply: number) {
    return new Franc(this.amount * multiply);
  }
  isEqual(franc: Franc) {
    return this.amount === franc.amount;
  }
}

export default Franc;
