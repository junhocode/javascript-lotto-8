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
      const budget = await retryOnException(async () => {
        const budgetInput = await InputView.getBudget();
        return Parser.budgetParser(budgetInput);
      });

      const lottoCount = calculatePurchaseCount(budget);
      const lottos = LottoGenerator.generate(lottoCount);
      OutputView.printLottoCount(lottoCount);
      OutputView.printLottos(lottos);

      const winningNumbers = await retryOnException(async () => {
        const winningNumbersInput = await InputView.getWinningNumbers();
        return Parser.winningNumbersParser(winningNumbersInput);
      });

      const bonusNumber = await retryOnException(async () => {
        const bonusNumberInput = await InputView.getBonusNumber();
        return Parser.bonusNumberParser(bonusNumberInput, winningNumbers);
      });

      const { results, profitRate } = LottoChecker.check(
        lottos,
        budget,
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
}

export default LottoController;