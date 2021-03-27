import Money from "./Money";

class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiply: number) {
    return new Franc(this.amount * multiply);
  }
}

export default Franc;
