import { Console } from "@woowacourse/mission-utils";
import { UI_MESSGAES } from "../constants/messages.js";
import { WINNING_CRITERIA } from "../constants/constants.js";

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
    const rankKeys = Object.keys(WINNING_CRITERIA);

    rankKeys.sort((keyA, keyB) => {
      return WINNING_CRITERIA[keyB].rank - WINNING_CRITERIA[keyA].rank;
    });

    rankKeys.forEach(rankKey => {
      const criteria = WINNING_CRITERIA[rankKey];
      const count = results[rankKey];

      let description = UI_MESSGAES.MATCH_DESCRIPTION(criteria.match);
      
      if (criteria.hasBonusNumber) description += UI_MESSGAES.BONUS_DESCRIPTION;

      const formattedPrize = criteria.prize.toLocaleString('ko-KR');
      
      const resultLine = UI_MESSGAES.RESULT_LINE_FORMAT(description, formattedPrize, count);
      Console.print(resultLine);
    });
  }

  static printProfitRate(profitRate) {
    Console.print(UI_MESSGAES.PROFIT_RATE(profitRate));
  }

  static printError(error) {
    Console.print(error.message);
  }
}

export default OutputView;
