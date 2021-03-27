import Money from "./Money";

class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiply: number) {
    return new Dollar(this.amount * multiply);
  }
}

export default Dollar;
