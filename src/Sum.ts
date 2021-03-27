import Money from "./Money";

class Sum {
  augend!: Money;
  addend!: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
}

export default Sum;
