import calculatePuschaseAmount from "../src/service/models/LottoCalculator";

jest.mock("../src/constants/constants", () => ({
  CONSTANTS: {
    LOTTO_PRICE: 1000,
  },
}));

describe("calculatePuschaseAmount 함수", () => {
  test("구입 금액이 로또 가격으로 나누어 떨어지는 정상적인 값인 경우, 구매 개수를 반환한다.", () => {
    // given
    const budget = 8000;
    const expectedResult = 8;

    // when
    const calculatedAmount = calculatePuschaseAmount(budget);

    // then
    expect(calculatedAmount).toBe(expectedResult);
  });

  test("구입 금액이 0원이면, 0을 반환한다.", () => {
    // given
    const budget = 0;
    const expectedResult = 0;

    // when
    const calculatedAmount = calculatePuschaseAmount(budget);

    // then
    expect(calculatedAmount).toBe(expectedResult);
  });
});