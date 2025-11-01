import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Parser from "../service/models/Parser.js";
import { retryOnException } from "../utils/retryOnException.js";
import LottoGenerator from "../service/models/LottoGenerator.js";
import LottoWinChecker from "../service/models/LottoWinChecker.js";

class LottoController {
  async run() {
    try {
      const budget = await retryOnException(InputView.getBudget());
      const lottoCount = Parser.budgetParser(budget);
      OutputView.printLottoCount(lottoCount);

      const winningNumbersInput = await retryOnException(InputView.getWinningNumbers());
      const winningNumbers = Parser.winningNumbersParser(winningNumbersInput);

      const bonusNumberInput = await retryOnException(InputView.getBonusNumber());
      const bonusNumber = Parser.bonusNumberParser(bonusNumberInput, winningNumbers)

      const lottos = LottoGenerator.generate(amountToBuy)
      OutputView.printLottos(lottos);

      const winningLotto = LottoWinChecker.matchLottoNumbers(lottos, winningNumbers, bonusNumber)
      OutputView.printResultHeader();
      const ROI = LottoWinChecker.calculateROI(winningLotto, amountToBuy)
      OutputView.printResults(winningLotto, ROI)
    } catch (error) {
      throw error;
    }
  }
}

export default LottoController;
