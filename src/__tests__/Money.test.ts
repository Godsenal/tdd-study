import Bank from "../Bank";
import Money from "../Money";

describe("Money 테스트", () => {
  it("multiplication 테스트", () => {
    const dollar = Money.dollar(5);

    expect(Money.dollar(10).isEqual(dollar.times(2))).toBe(true);
    expect(Money.dollar(15).isEqual(dollar.times(3))).toBe(true);

    const franc = Money.franc(5);

    expect(Money.franc(10).isEqual(franc.times(2))).toBe(true);
    expect(Money.franc(15).isEqual(franc.times(3))).toBe(true);
  });

  it("equality 테스트", () => {
    expect(Money.dollar(5).isEqual(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).isEqual(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).isEqual(Money.dollar(5))).toBe(false);
  });

  it("currency 테스트", () => {
    expect(Money.dollar(1).getCurrency()).toBe("USD");
    expect(Money.franc(1).getCurrency()).toBe("CHF");
  });

  it("addition 테스트", () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(Money.dollar(10).isEqual(reduced));
  });

  it("두 Money 클래스의 합은 Sum 클래스와 동일하다", () => {
    const five = Money.dollar(5);
    const result = five.plus(five);

    expect(five.isEqual(result.augend)).toBe(true);
    expect(five.isEqual(result.addend)).toBe(true);
  });
});
