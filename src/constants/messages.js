import { CONSTANTS } from "./constants.js"

export const UI_MESSGAES = {
    GET_BUDGET: "구입금액을 입력해 주세요.\n",
    LOTTO_COUNT: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
    GET_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
    GET_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
    RESULT_HEADER: "\n당첨 통계\n---",
    RESULT: (results) => [
        `3개 일치 (5,000원) - ${results.FIFTH}개`,
        `4개 일치 (50,000원) - ${results.FOURTH}개`,
        `5개 일치 (1,500,000원) - ${results.THIRD}개`,
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.SECOND}개`,
        `6개 일치 (2,000,000,000원) - ${results.FIRST}개`
    ].join('\n'),
    PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.`
}

export const ERROR_MESSGAES = {
    INVALID_BUDGET: '구입 금액으로 숫자 이외의 입력값을 넣을 수 없습니다.',
    FALSY_BUDGET: '구입 금액은 0원 이하가 될 수 없습니다.',
    INVALID_BUDGET_NUMBER: `구입 금액은 ${CONSTANTS.LOTTO_PRICE.toLocaleString('ko-KR')}원 단위여야 합니다.`,
    INVALID_WINNING_NUMBERS: '당첨 번호로 숫자 이외의 값을 넣을 수 없습니다.', 
    INVALID_WINNING_NUMBERS_LENGTH: '당첨 번호는 6개여야 합니다.',
    INVALID_LOTTO_NUMBER: '로또의 번호는 1과 45 사이의 값이여야 합니다.',
    INVALID_BONUS_NUMBER: '보너스 번호로 숫자 이외의 값을 넣을 수 없습니다.',
    DUPLICATE_WINNING_NUMBER: '당첨 번호에 동일한 숫자가 포함되어 있습니다.',
    BONUS_NUMBER_EXISTS: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
}