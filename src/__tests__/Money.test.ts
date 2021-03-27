import Dollar from "../Dollar";
import Franc from "../Franc";

describe("Money 테스트", () => {
  it("multiplication 테스트", () => {
    const dollar = new Dollar(5);

    expect(new Dollar(10).isEqual(dollar.times(2))).toBe(true);
    expect(new Dollar(15).isEqual(dollar.times(3))).toBe(true);

    const franc = new Franc(5);

    expect(new Franc(10).isEqual(franc.times(2))).toBe(true);
    expect(new Franc(15).isEqual(franc.times(3))).toBe(true);
  });

  it("equality 테스트", () => {
    expect(new Dollar(5).isEqual(new Dollar(5))).toBe(true);
    expect(new Dollar(5).isEqual(new Dollar(6))).toBe(false);
    expect(new Franc(5).isEqual(new Franc(5))).toBe(true);
    expect(new Franc(5).isEqual(new Franc(6))).toBe(false);
  });
});
