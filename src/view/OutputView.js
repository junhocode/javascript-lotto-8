import { Console } from "@woowacourse/mission-utils";
import { UI_MESSGAES } from "../constants/messages.js";

class OutputView {
  static printLottoCount(lottoCount) {
    Console.print(UI_MESSGAES.LOTTO_COUNT(lottoCount));
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`)
    });
  }

  static printResultHeader() {
    Console.print(UI_MESSGAES.RESULT_HEADER);
  }

  static printResults(results) {
    Console.print(UI_MESSGAES.RESULT(results));
  }

  static printProfitRate(profitRate) {
    Console.print(UI_MESSGAES.PROFIT_RATE(profitRate));
  }

  static printError(error) {
    Console.print(error.message);
  }
}

export default OutputView;
