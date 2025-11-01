import { CONSTANTS } from "../../constants/constants.js"
import { ERROR_MESSGAES } from "../../constants/messages"

class Parser {
    static budgetParser(budget) {
        this.#validateBudget(budget)
        const lottoCount = budget / CONSTANTS.LOTTO_PRICE
        return lottoCount;
    }

    static winningNumbersParser(winningNumbers) {
        const winningNumbersArray = Number(winningNumbers.split(','))
        this.#validateWinningNumbers(winningNumbersArray)
        return winningNumbersArray;
    }

    static bonusNumberParser(bonusNumber, winningNumbersArray) {
        this.#validateBonusNumber(bonusNumber, winningNumbersArray)
        return bonusNumber;
    }

    static #validateBudget(budget) {
        if (isNaN(budget)) throw new Error(ERROR_MESSGAES.INVALID_BUDGET);
        if (budget <= 0) throw new Error(ERROR_MESSGAES.FALSY_BUDGET);
        if (budget % CONSTANTS.LOTTO_PRICE) throw new Error(ERROR_MESSGAES.INVALID_BUDGET_NUMBER);
    }
    
    static #validateWinningNumbers(winningNumbersArray) {
        if (winningNumbersArray.some((number) => isNaN(number))) throw new Error(ERROR_MESSGAES.INVALID_WINNING_NUMBERS);
        if (winningNumbersArray.length !== 6) throw new Error(ERROR_MESSGAES.INVALID_WINNING_NUMBERS_LENGTH);
        if (winningNumbersArray.some((number) => number > CONSTANTS.MAX_LOTTO_NUMBER || number < CONSTANTS.MIN_LOTTO_NUMBER)) throw new Error(ERROR_MESSGAES.INVALID_LOTTO_NUMBER);
        if (new Set(winningNumbersArray).size !== winningNumbersArray.length) throw new Error(ERROR_MESSGAES.DUPLICATE_WINNING_NUMBER); 
    }

    static #validateBonusNumber(bonusNumber, winningNumbersArray) {
        if (isNaN(bonusNumber)) throw new Error(ERROR_MESSGAES.INVALID_BONUS_NUMBER);
        if (bonusNumber > MAX_LOTTO_NUMBER || bonusNumber < CONSTANTS.MIN_LOTTO_NUMBER) throw new Error(ERROR_MESSGAES.INVALID_LOTTO_NUMBER);
        if (winningNumbersArray.includes(bonusNumber)) throw new Error(ERROR_MESSGAES.BONUS_NUMBER_EXISTS);
    }
}

export default Parser;