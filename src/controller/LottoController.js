import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Parser from "../service/models/Parser.js";
import LottoGenerator from "../service/models/LottoGenerator.js";
import LottoChecker from "../service/models/LottoChecker.js";
import calculatePurchaseCount from "../service/models/LottoCalculator.js"
import retryOnException from "../utils/retryOnException.js"

class LottoController {
  async run() {
    try {
      const { budget, lottoCount, lottos } = await this.#purchaseLottos();
      OutputView.printLottoCount(lottoCount);
      OutputView.printLottos(lottos);

      const winningNumbers = await this.#getWinningNumbers();

      const bonusNumber = await this.#getBonusNumber(winningNumbers);

      const { results, profitRate } = LottoChecker.check(
        budget,
        lottos,
        winningNumbers,
        bonusNumber
      );

      OutputView.printResultHeader();
      OutputView.printResults(results)
      OutputView.printProfitRate(profitRate);

    } catch (error) {
      throw error;
    }
  }

  async #purchaseLottos() {
    return retryOnException(async () => {
      const budgetInput = await InputView.getBudget();
      const budget = Parser.budgetParser(budgetInput);
      const lottoCount = calculatePurchaseCount(budget);
      const lottos = LottoGenerator.generate(lottoCount);
      return { budget, lottoCount, lottos };
    });
  }

  async #getWinningNumbers() {
    return retryOnException(async () => {
      const winningNumbersInput = await InputView.getWinningNumbers();
      return Parser.winningNumbersParser(winningNumbersInput);
    });
  }

  async #getBonusNumber(winningNumbers) {
    return retryOnException(async () => {
      const bonusNumberInput = await InputView.getBonusNumber();
      return Parser.bonusNumberParser(bonusNumberInput, winningNumbers);
    });
  }
}

export default LottoController;