import Validator from "../validator/Validator.js";
import { CONSTANTS } from "../../constants/constants.js";

class LottoWinChecker {
  static #getRank(matchCount, hasBonus) {
    if (matchCount === 6) return "first";
    if (matchCount === 5 && hasBonus) return "second";
    if (matchCount === 5) return "third";
    if (matchCount === 4) return "fourth";
    if (matchCount === 3) return "fifth";
    return "none";
  }

  static getWinningNumbers(winningNumbersInput) {
    const winningNumbers = winningNumbersInput.split(",").map(Number);
    Validator.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  static getBonusNumber(bonusNumberInput) {
    const bonusNumber = Validator.validateBonusNumber(bonusNumberInput);
    return bonusNumber;
  }

  static matchLottoNumbers(lottos, winningNumbers, bonusNumber) {
    const stats = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchCount = lottoNumbers.filter((n) =>
        winningNumbers.includes(n)
      ).length;
      const hasBonus = lottoNumbers.includes(bonusNumber);
      const rank = this.#getRank(matchCount, hasBonus);

      if (rank !== "none") stats[rank]++;
    });
    return stats;
  }

  static calculateROI(stats, amountToBuy) {
    const PRIZE_MONEY = {
        first: CONSTANTS.FIRST_PRIZE,
        second: CONSTANTS.SECOND_PRIZE,
        third: CONSTANTS.THIRD_PRIZE,
        fourth: CONSTANTS.FOUTRH_PRIZE,
        fifth: CONSTANTS.FIFTH_PRIZE
    }
    const totalEarnings = 
    stats.first * PRIZE_MONEY.first +
    stats.second * PRIZE_MONEY.second +
    stats.third * PRIZE_MONEY.third +
    stats.fourth * PRIZE_MONEY.fourth +
    stats.fifth * PRIZE_MONEY.fifth
    
    const spentMoney = amountToBuy * 1000 
    const ROI = (totalEarnings / spentMoney) * 100
    const percentage = ROI.toFixed(1)
    return percentage;
  }
}

export default LottoWinChecker;
