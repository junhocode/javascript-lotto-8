import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoGenerator from "../service/models/LottoGenerator.js";
import LottoWinChecker from "../service/models/LottoWinChecker.js";

class LottoController {
  async run() {
    try {
      const amountToBuy = await this.#getValidBudget();
      OutputView.printBoughtAmount(amountToBuy);
      const lottos = LottoGenerator.generate(amountToBuy)
      OutputView.printLottos(lottos);

      const winningNumbers = await this.#getValidWinningNumbers();
      const bonusNumber = await this.#getValidBonusNumber();

      const winningLotto = LottoWinChecker.matchLottoNumbers(lottos, winningNumbers, bonusNumber)
      OutputView.printResultHeader();
      const ROI = LottoWinChecker.calculateROI(winningLotto, amountToBuy)
      OutputView.printResults(winningLotto, ROI)
    } catch (error) {
      throw error;
    }
  }

  async #getValidBudget() {
    while (true) {
      try {
        const budgetInput = await InputView.getLottoBudget();
        const amountNumber = LottoGenerator.getAmountToBuy(budgetInput);
        return amountNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getValidWinningNumbers() {
    while (true) {
      try {
        const winningNumbersInput = await InputView.getWinningNumbers();
        const winningNumbers =
          LottoWinChecker.getWinningNumbers(winningNumbersInput);
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getValidBonusNumber() {
    while (true) {
      try {
        const bonusNumberInput = await InputView.getBonusNumber();
        const bonusNumber = LottoWinChecker.getBonusNumber(bonusNumberInput);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default LottoController;
