import Parser from "../src/service/models/Parser.js";
import ValidationError from "../src/errors/ValidationError.js";
import { ERROR_MESSGAES } from "../src/constants/messages.js";

jest.mock("../src/constants/constants", () => ({
  CONSTANTS: {
    LOTTO_PRICE: 1000,
    MIN_LOTTO_NUMBER: 1,
    MAX_LOTTO_NUMBER: 45,
  },
}));

describe("Parser 클래스", () => {
  describe("budgetParser 메소드", () => {
    test("유효한 예산 문자열('3000')을 받으면, 해당 문자열을 그대로 반환한다.", () => {
      // given
      const validInput = "3000";
      // when
      const result = Parser.budgetParser(validInput);
      // then
      expect(result).toBe(validInput);
    });

    // then
    test.each([
      { input: "1000j", expectedError: ERROR_MESSGAES.INVALID_BUDGET },
      { input: "0", expectedError: ERROR_MESSGAES.FALSY_BUDGET },
      { input: "-1000", expectedError: ERROR_MESSGAES.FALSY_BUDGET },
      { input: "1500", expectedError: ERROR_MESSGAES.INVALID_BUDGET_NUMBER },
    ])("유효하지 않은 금액을 받으면, ValidationError를 던진다.", ({ input, expectedError }) => {
      expect(() => Parser.budgetParser(input)).toThrow(expectedError);
      expect(() => Parser.budgetParser(input)).toThrow(ValidationError);
    });
  });

  describe("winningNumbersParser 메소드", () => {
    test("유효한 당첨 번호 문자열('1,2,3,4,5,6')을 받으면, 숫자 배열로 변환하여 반환해야 한다.", () => {
      // given
      const validInput = "1,2,3,4,5,6";
      const expectedArray = [1, 2, 3, 4, 5, 6];
      // when
      const result = Parser.winningNumbersParser(validInput);
      // then
      expect(result).toEqual(expectedArray);
    });

    // then
    test.each([
        { input: "1,2,3,4,5,a", expectedError: ERROR_MESSGAES.INVALID_WINNING_NUMBERS },
        { input: "1,2,3,4,5", expectedError: ERROR_MESSGAES.INVALID_WINNING_NUMBERS_LENGTH },
        { input: "1,2,3,4,5,46", expectedError: ERROR_MESSGAES.INVALID_LOTTO_NUMBER },
        { input: "1,2,3,4,5,5", expectedError: ERROR_MESSGAES.DUPLICATE_WINNING_NUMBER },
    ])("유효하지 않은 당첨 번호를 받으면, ValidationError를 던진다.", ({ input, expectedError }) => {
        expect(() => Parser.winningNumbersParser(input)).toThrow(expectedError);
        expect(() => Parser.winningNumbersParser(input)).toThrow(ValidationError);
    });
  });

  describe("bonusNumberParser 메소드", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    
    // then
    test("유효한 보너스 번호('7')를 받으면, 해당 문자열을 그대로 반환한다.", () => {
      // given
      const validBonus = "7";
      // when
      const result = Parser.bonusNumberParser(validBonus, winningNumbers);
      // then
      expect(result).toBe(validBonus);
    });

    // then
    test.each([
        { input: "a", expectedError: ERROR_MESSGAES.INVALID_BONUS_NUMBER },
        { input: "46", expectedError: ERROR_MESSGAES.INVALID_LOTTO_NUMBER },
        { input: "0", expectedError: ERROR_MESSGAES.INVALID_LOTTO_NUMBER },
        { input: "6", expectedError: ERROR_MESSGAES.BONUS_NUMBER_EXISTS },
    ])("유효하지 않은 보너스 번호($input)를 받으면, ValidationError를 던져야 한다.", ({ input, expectedError }) => {
        expect(() => Parser.bonusNumberParser(input, winningNumbers)).toThrow(expectedError);
        expect(() => Parser.bonusNumberParser(input, winningNumbers)).toThrow(ValidationError);
    });
  });
});