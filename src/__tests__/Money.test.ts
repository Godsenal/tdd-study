import MoneyFactory from "../MoneyFactory";

describe("MoneyFactory 테스트", () => {
  it("multiplication 테스트", () => {
    const dollar = MoneyFactory.dollar(5);

    expect(MoneyFactory.dollar(10).isEqual(dollar.times(2))).toBe(true);
    expect(MoneyFactory.dollar(15).isEqual(dollar.times(3))).toBe(true);

    const franc = MoneyFactory.franc(5);

    expect(MoneyFactory.franc(10).isEqual(franc.times(2))).toBe(true);
    expect(MoneyFactory.franc(15).isEqual(franc.times(3))).toBe(true);
  });

  it("equality 테스트", () => {
    expect(MoneyFactory.dollar(5).isEqual(MoneyFactory.dollar(5))).toBe(true);
    expect(MoneyFactory.dollar(5).isEqual(MoneyFactory.dollar(6))).toBe(false);
    expect(MoneyFactory.franc(5).isEqual(MoneyFactory.franc(5))).toBe(true);
    expect(MoneyFactory.franc(5).isEqual(MoneyFactory.franc(6))).toBe(false);
    expect(MoneyFactory.franc(5).isEqual(MoneyFactory.dollar(5))).toBe(false);
  });
});
