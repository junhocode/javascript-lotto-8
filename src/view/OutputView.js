import { Console } from "@woowacourse/mission-utils"
import { UI_MESSGAES } from "../constants/messages.js"

class OutputView {
  static printBoughtAmount(boughtAmount) {
    Console.print(UI_MESSGAES.BOUGHT_LOTTO_COUNT(boughtAmount));
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers()
      const formattedString = `[${numbers.join(', ')}]`
      Console.print(formattedString);
    })
  }

  static printResultHeader() {
    Console.print(UI_MESSGAES.RESULT_HEADER);
  }
  
  static printResults(rank, roi) {
    Console.print(`3개 일치 (5,000원) - ${rank.fifth}개\n4개 일치 (50,000원) - ${rank.fourth}개\n5개 일치 (1,500,000원) - ${rank.third}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.second}개\n6개 일치 (2,000,000,000원) - ${rank.first}개\n총 수익률은 ${roi}%입니다.
    `)
  }
}

export default OutputView;