class Dollar {
  constructor(amount) {
    this.amount = amount;
  }
  times(multiply) {
    return new Dollar(this.amount * multiply);
  }
}

module.exports = Dollar;
