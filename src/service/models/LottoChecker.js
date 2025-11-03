import { WINNING_CRITERIA } from "../../constants/constants.js";
import { CONSTANTS } from "../../constants/constants.js";

class LottoChecker {
  static check(lottos, winningNumbers, bonusNumber) {
    const results = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0 };

    lottos.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      if (rank) {
        results[rank] += 1;
      }
    });

    let totalEarnings = 0;
    Object.keys(results).forEach(rank => {
      const count = results[rank];
      if (count > 0) {
        totalEarnings += WINNING_CRITERIA[rank].prize * count;
      }
    });

    const profitRate = this.#calculateProfitRate(lottos, totalEarnings);

    return { results, profitRate };
  }

  static #calculateProfitRate(lottos, totalEarnings) {
    if (lottos.length === 0) return 0;
    const budget = lottos.length * CONSTANTS.LOTTO_PRICE

    return ((totalEarnings / budget) * 100).toFixed(1);
  }
}

export default LottoChecker;