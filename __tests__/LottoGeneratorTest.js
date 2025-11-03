import { MissionUtils } from "@woowacourse/mission-utils";
import LottoGenerator from "../src/service/models/LottoGenerator";
import Lotto from "../src/service/models/Lotto";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("LottoGenerator 클래스 테스트", () => {
  
  test("generate 메소드는 요청된 개수만큼 Lotto 객체의 배열을 반환한다.", () => {
    const lottoCount = 3;
    const mockNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];
    mockRandoms(mockNumbers);

    // when
    const lottos = LottoGenerator.generate(lottoCount);

    // then
    expect(lottos).toHaveLength(lottoCount);
    // then
    lottos.forEach(lotto => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  test("로또 번호는 항상 오름차순이다.", () => {
    // given
    const unsortedNumbers = [45, 2, 1, 15, 30, 8];
    const expectedSortedNumbers = [1, 2, 8, 15, 30, 45];
    mockRandoms([unsortedNumbers]); 

    // when
    const lottos = LottoGenerator.generate(1);
    const generatedLotto = lottos[0];

    // then
    expect(generatedLotto.getNumbers()).toEqual(expectedSortedNumbers);
  });
});