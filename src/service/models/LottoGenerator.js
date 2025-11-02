import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  static generate(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
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
