class Dollar {
  constructor(amount) {
    this.amount = amount;
  }
  times(multiply) {
    return new Dollar(this.amount * multiply);
  }
  isEqual(dollar) {
    return this.amount === dollar.amount;
  }
}

module.exports = Dollar;
