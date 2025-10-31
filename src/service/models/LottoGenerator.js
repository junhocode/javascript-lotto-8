import { Random } from "@woowacourse/mission-utils";
import Lotto from "../../Lotto.js";
import InputView from "../../view/InputView.js";
import Validator from "../validator/Validator.js";
import { CONSTANTS } from "../../constants/constants.js";

class LottoGenerator {
  static getAmountToBuy(budgetInput) {
    Validator.validateBudget(budgetInput);
    const amountNumber = Number(budgetInput / CONSTANTS.LOTTO_PRICE);
    return amountNumber;
  }

  static generate(amountNumber) {
    const lottos = [];
    for (let i = 0; i < amountNumber; i++) {
      const numbers = LottoGenerator.#generateNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }

  static #generateNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
}
export default LottoGenerator;
