import LottoController from "../src/controller/LottoController.js";
import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("../src/view/InputView.js");
jest.mock("../src/view/OutputView.js");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("LottoController 클래스", () => {
  let controller;
  beforeEach(() => {
    controller = new LottoController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("run 메소드 (정상)", () => {
    test("로또 구매부터 결과 발표까지 전체 과정이 정상적으로 동작한다.", async () => {
      // given
      const budgetInput = "8000";
      const winningNumbersInput = "1,2,3,4,5,6";
      const bonusNumberInput = "7";

      InputView.getBudget.mockResolvedValue(budgetInput);
      InputView.getWinningNumbers.mockResolvedValue(winningNumbersInput);
      InputView.getBonusNumber.mockResolvedValue(bonusNumberInput);

      mockRandoms([
        [8, 21, 23, 41, 42, 43], [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44], [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45], [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45], [1, 3, 5, 14, 22, 45],
      ]);

      // when
      await controller.run();

      // then
      expect(OutputView.printLottoCount).toHaveBeenCalledWith(8);
      expect(OutputView.printLottos).toHaveBeenCalledTimes(1);
      
      const expectedResults = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1 };
      const expectedProfitRate = "62.5";

      expect(OutputView.printResults).toHaveBeenCalledWith(expectedResults);
      expect(OutputView.printProfitRate).toHaveBeenCalledWith(expectedProfitRate);
    });
  });

  describe("run 메소드 (예외 처리 테스트)", () => {
    test("잘못된 예산을 입력했을 경우, 에러 메시지를 출력하고 다시 입력을 시도한다.", async () => {
      // given
      const invalidBudget = "1500";
      const validBudget = "2000";
      const winningNumbersInput = "1,2,3,4,5,6";
      const bonusNumberInput = "7";

      InputView.getBudget
        .mockResolvedValueOnce(invalidBudget)
        .mockResolvedValueOnce(validBudget);
      
      InputView.getWinningNumbers.mockResolvedValue(winningNumbersInput);
      InputView.getBonusNumber.mockResolvedValue(bonusNumberInput);
      
      mockRandoms([[1,2,3,4,5,6], [7,8,9,10,11,12]]);

      // when
      await controller.run();

      // then
      expect(InputView.getBudget).toHaveBeenCalledTimes(2);
      
      // then
      expect(OutputView.printError).toHaveBeenCalledTimes(1);
      expect(OutputView.printError).toHaveBeenCalledWith(expect.any(Error));

      // then
      expect(OutputView.printLottoCount).toHaveBeenCalledWith(2);
    });
  });
});