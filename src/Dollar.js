class Dollar {
  constructor(amount) {
    this.amount = amount;
  }
  times(multiply) {
    this.amount = this.amount * multiply;
  }
}

module.exports = Dollar;
