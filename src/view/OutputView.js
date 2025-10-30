import { Console } from "@woowacourse/mission-utils"
import { UI_MESSGAES } from "../constants/messages.js"

class OutputView {
  static printBoughtAmount(boughtAmount) {
    Console.print(UI_MESSGAES.BOUGHT_LOTTO_COUNT(boughtAmount));
  }
}

export default OutputView;