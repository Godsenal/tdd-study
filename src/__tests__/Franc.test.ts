import Franc from "../Franc";

describe("Franc 테스트", () => {
  it("multiplication 테스트", () => {
    const franc = new Franc(5);

    expect(new Franc(10).isEqual(franc.times(2))).toBe(true);
    expect(new Franc(15).isEqual(franc.times(3))).toBe(true);
  });

  it("equality 테스트", () => {
    expect(new Franc(5).isEqual(new Franc(5))).toBe(true);
    expect(new Franc(5).isEqual(new Franc(6))).toBe(false);
  });
});
