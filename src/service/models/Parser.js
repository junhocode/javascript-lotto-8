import { CONSTANTS } from "../../constants/constants.js"
import { ERROR_MESSGAES } from "../../constants/messages.js";
import ValidationError from "../../errors/ValidationError.js";

class Parser {
    static budgetParser(budget) {
        this.#validateBudget(Number(budget))
        return budget;
    }

    static winningNumbersParser(winningNumbersInput) {
        const winningNumbers = winningNumbersInput.split(',').map(Number);
        this.#validateWinningNumbers(winningNumbers)
        return winningNumbers;
    }

    static bonusNumberParser(bonusNumber, winningNumbers) {
        this.#validateBonusNumber(Number(bonusNumber), winningNumbers)
        return bonusNumber;
    }

    static #validateBudget(budget) {
        if (isNaN(budget)) throw new ValidationError(ERROR_MESSGAES.INVALID_BUDGET);
        if (budget <= 0) throw new ValidationError(ERROR_MESSGAES.FALSY_BUDGET);
        if (budget % CONSTANTS.LOTTO_PRICE) throw new ValidationError(ERROR_MESSGAES.INVALID_BUDGET_NUMBER);
    }
    
    static #validateWinningNumbers(winningNumbers) {
        if (winningNumbers.some((number) => isNaN(number))) throw new ValidationError(ERROR_MESSGAES.INVALID_WINNING_NUMBERS);
        if (winningNumbers.length !== 6) throw new ValidationError(ERROR_MESSGAES.INVALID_WINNING_NUMBERS_LENGTH);
        if (winningNumbers.some((number) => number > CONSTANTS.MAX_LOTTO_NUMBER || number < CONSTANTS.MIN_LOTTO_NUMBER)) throw new ValidationError(ERROR_MESSGAES.INVALID_LOTTO_NUMBER);
        if (new Set(winningNumbers).size !== winningNumbers.length) throw new ValidationError(ERROR_MESSGAES.DUPLICATE_WINNING_NUMBER); 
    }

    static #validateBonusNumber(bonusNumber, winningNumbers) {
        if (isNaN(bonusNumber)) throw new ValidationError(ERROR_MESSGAES.INVALID_BONUS_NUMBER);
        if (bonusNumber > CONSTANTS.MAX_LOTTO_NUMBER || bonusNumber < CONSTANTS.MIN_LOTTO_NUMBER) throw new ValidationError(ERROR_MESSGAES.INVALID_LOTTO_NUMBER);
        if (winningNumbers.includes(bonusNumber)) throw new ValidationError(ERROR_MESSGAES.BONUS_NUMBER_EXISTS);
    }
}

export default Parser;