import Bank from "../Bank";
import Money from "../Money";
import Operator from "../Operator";
import Sum from "../Operator";

describe("Money 테스트", () => {
  it("multiplication 테스트", () => {
    const dollar = Money.dollar(5);

    expect(Money.dollar(10).isEqual(dollar.times(2))).toBe(true);
    expect(Money.dollar(15).isEqual(dollar.times(3))).toBe(true);

    const franc = Money.franc(5);

    expect(Money.franc(10).isEqual(franc.times(2))).toBe(true);
    expect(Money.franc(15).isEqual(franc.times(3))).toBe(true);
  });

  // 다른 테스트에 영향을 줄 수 있는 위험한 요소
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
    const sum = five.operate("+", five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(Money.dollar(10).isEqual(reduced));
  });

  it("두 Money 클래스의 합은 Sum 클래스와 동일하다", () => {
    const five = Money.dollar(5);
    const result = five.operate("+", five);

    expect(five.isEqual(result.augend as Money)).toBe(true);
    expect(five.isEqual(result.addend as Money)).toBe(true);
  });

  it("다른 통화간의 reduce 테스트", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const result = bank.reduce(Money.franc(2), "USD");
    expect(result.isEqual(Money.dollar(1))).toBe(true);
  });

  it("다른 통화간의 addition 테스트", () => {
    const dollar = Money.dollar(5);
    const franc = Money.franc(10);
    const bank = new Bank();

    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(dollar.operate("+", franc), "USD");
    expect(Money.dollar(10).isEqual(result)).toBe(true);
  });

  it("Sum 클래스와 Money 클래스의 addition 테스트", () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();

    bank.addRate("CHF", "USD", 2);

    const sum = new Operator(fiveBucks, "+", tenFrancs).operate("+", fiveBucks);
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(15).isEqual(result)).toBe(true);
  });

  it("Sum 클래스의 times 테스트", () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();

    bank.addRate("CHF", "USD", 2);

    const sum = new Operator(fiveBucks, "+", tenFrancs).times(2);
    const result = bank.reduce(sum, "USD");

    expect(Money.dollar(20).isEqual(result)).toBe(true);
  });

  it("Operator 클래스를 통한 연산 테스트", () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();

    bank.addRate("CHF", "USD", 2);

    const multiple = new Operator(fiveBucks, "*", tenFrancs)
      .operate("+", fiveBucks)
      .operate("*", fiveBucks)
      .operate("-", fiveBucks);
    const result = bank.reduce(multiple, "USD");

    expect(Money.dollar(145).isEqual(result)).toBe(true);
  });
});
