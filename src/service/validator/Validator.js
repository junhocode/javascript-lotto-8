import { ERROR_MESSGAES } from "../../constants/messages.js";

class Validator {
  static validateBudget(budgetInput) {
    if (isNaN(budgetInput)) {
      throw new Error(ERROR_MESSGAES.INVALID_BUDGET);
    }
    if (budgetInput % 1000 !== 0) {
      throw new Error(ERROR_MESSGAES.INVALID_BUDGET_NUMBER);
    }
  }

  static validateWinningNumbers(winningNumbers) {
    if (winningNumbers.forEach((number) => isNaN(number))) {
      throw new Error(ERROR_MESSGAES.INVALID_WINNING_NUMBERS);
    }
    if (winningNumbers.length > 6 || winningNumbers.length < 6) {
      throw new Error(ERROR_MESSGAES.INVALID_WINNING_NUMBERS_LENGTH);
    }
    if (winningNumbers.forEach((number) => number > 45 || number < 1))
      throw new Error(ERROR_MESSGAES.INVALID_LOTTO_NUMBER);
  }

  static validateBonusNumber(bonusNumberInput) {
    if (isNaN(bonusNumberInput)) {
      throw new Error(ERROR_MESSGAES.INVALID_WINNING_NUMBERS);
    }
    if (bonusNumberInput < 1 || bonusNumberInput > 45)
      throw new Error(ERROR_MESSGAES.INVALID_LOTTO_NUMBER);
  }
}

export default Validator;
