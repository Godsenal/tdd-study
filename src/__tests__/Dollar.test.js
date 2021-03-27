const Dollar = require("../Dollar");

describe("Dollar 테스트", () => {
  it("multiplication 테스트", () => {
    const dollar = new Dollar(5);
    const product = dollar.times(2);

    expect(product.amount).toBe(10);
  });

  it("side effect가 없어야 함", () => {
    const dollar = new Dollar(5);
    let product = dollar.times(2);

    expect(product.amount).toBe(10);
    product = dollar.times(3);
    expect(product.amount).toBe(15);
  });

  it("equality 테스트", () => {
    expect(new Dollar(5).isEqual(new Dollar(5))).toBe(true);
    expect(new Dollar(5).isEqual(new Dollar(6))).toBe(false);
  });
});
