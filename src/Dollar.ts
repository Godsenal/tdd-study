import Money from "./Money";

class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export default Dollar;
