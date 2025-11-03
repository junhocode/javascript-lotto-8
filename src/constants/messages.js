import { CONSTANTS } from "./constants.js"

export const UI_MESSGAES = {
    GET_BUDGET: "구입금액을 입력해 주세요.\n",
    LOTTO_COUNT: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
    GET_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
    GET_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
    RESULT_HEADER: "\n당첨 통계\n---",
    MATCH_DESCRIPTION: (match) => `${match}개 일치`,
    BONUS_DESCRIPTION: ', 보너스 볼 일치',
    RESULT_LINE_FORMAT: (description, prize, count) => `${description} (${prize}원) - ${count}개`,
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