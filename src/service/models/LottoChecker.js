import { WINNING_CRITERIA } from "../../constants/constants.js";

class LottoChecker {
  static check(lottos, budget, winningNumbers, bonusNumber) {
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

    const profitRate = this.#calculateProfitRate(totalEarnings, budget);

    return { results, profitRate };
  }

  static #calculateProfitRate(totalEarnings, budget) {
    if (budget === 0) return 0;

    return ((totalEarnings / budget) * 100).toFixed(1);
  }
}

export default LottoChecker;