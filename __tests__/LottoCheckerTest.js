import LottoChecker from "../src/service/models/LottoChecker.js";

jest.mock("../src/constants/constants", () => ({
  WINNING_CRITERIA: {
    FIRST:  { match: 6, hasBonusNumber: false, prize: 2000000000, rank: 1 },
    SECOND: { match: 5, hasBonusNumber: true,  prize: 30000000, rank: 2 },
    THIRD:  { match: 5, hasBonusNumber: false, prize: 1500000, rank: 3 },
    FOURTH: { match: 4, hasBonusNumber: false, prize: 50000, rank: 4 },
    FIFTH:  { match: 3, hasBonusNumber: false, prize: 5000, rank: 5 },
  },
}));

const createMockLotto = (rank) => ({
  getRank: jest.fn().mockReturnValue(rank),
});

describe("LottoWinChecker 클래스", () => {
  describe("check 메소드", () => {
    test("주어진 로또들에 대한 당첨 통계와 수익률을 정확히 계산하여 반환한다.", () => {
      // given
      const budget = 8000;
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const mockLottos = [
        createMockLotto("FOURTH"), 
        createMockLotto("FIFTH"),  
        createMockLotto("FIFTH"), 
        createMockLotto(null),
        createMockLotto(null),
        createMockLotto(null),
        createMockLotto(null),
        createMockLotto(null),
      ];

      // when
      const result = LottoChecker.check(mockLottos, budget, winningNumbers, bonusNumber);

      // then
      const expectedResults = {
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 1,
        FIFTH: 2,
      };
      expect(result.results).toEqual(expectedResults);

      // then
      const expectedProfitRate = "750.0";
      expect(result.profitRate).toBe(expectedProfitRate);
    });

    test("당첨된 로또가 하나도 없을 경우, 모든 통계는 0이고 수익률은 '0.0'이어야 한다.", () => {
      // given
      const budget = 3000;
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const mockLottos = [
        createMockLotto(null),
        createMockLotto(null),
        createMockLotto(null),
      ];
      
      // when
      const result = LottoChecker.check(mockLottos, budget, winningNumbers, bonusNumber);

      // then
      const expectedResults = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0 };
      expect(result.results).toEqual(expectedResults);
      expect(result.profitRate).toBe("0.0");
    });
  });
});