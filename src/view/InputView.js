import { Console } from "@woowacourse/mission-utils"
import { UI_MESSGAES } from "../constants/messages.js"

class InputView {
  static async getLottoBudget() {
    const budgetInput = await Console.readLineAsync(UI_MESSGAES.GET_BUDGET);
    return budgetInput;
  }

  static async getWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(UI_MESSGAES.GET_WINNING_NUMBERS);
    return winningNumbersInput;
  }

  static async getBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync(UI_MESSGAES.GET_BONUS_NUMBER);
    return bonusNumberInput;
  }
}

export default InputView;