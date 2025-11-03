import { WINNING_CRITERIA } from "../../constants/constants.js";

class LottoChecker {
  static check( budget, lottos, winningNumbers, bonusNumber) {
    const { results, totalEarnings } = this.#calculateResult(lottos, winningNumbers, bonusNumber) 
    const profitRate = this.#calculateProfitRate(budget, totalEarnings);

    return { results, profitRate };
  }

  static #calculateResult(lottos, winningNumbers, bonusNumber) {
    const results = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0 };
    let totalEarnings = 0;

    lottos.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      if (rank) {
        results[rank] += 1;
      }
    });

    Object.keys(results).forEach(rank => {
      const count = results[rank];
      if (count > 0) {
        totalEarnings += WINNING_CRITERIA[rank].prize * count;
      }
    });
    return { results, totalEarnings };
  }

  static #calculateProfitRate(budget, totalEarnings) {
    if (budget === 0) return 0; //방어 코드

    return ((totalEarnings / budget) * 100).toFixed(1);
  }
}

export default LottoChecker;