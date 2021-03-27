class Franc {
  #amount = 0;
  constructor(amount: number) {
    this.#amount = amount;
  }
  times(multiply: number) {
    return new Franc(this.#amount * multiply);
  }
  isEqual(franc: Franc) {
    return this.#amount === franc.#amount;
  }
}

export default Franc;
