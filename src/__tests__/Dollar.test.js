const Dollar = require("../Dollar");

describe("Dollar 테스트", () => {
  it("multiplication 테스트", () => {
    const dollar = new Dollar(5);
    dollar.times(2);

    expect(dollar.amount).toBe(10);
  });
});
