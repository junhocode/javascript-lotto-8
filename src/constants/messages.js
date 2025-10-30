import { CONSTANTS } from "./constants.js"

export const UI_MESSGAES = {
    GET_BUDGET: "구입금액을 입력해 주세요. \n",
    BOUGHT_LOTTO_COUNT: (boughtAmount) => `${boughtAmount}개를 구매했습니다.`,
    GET_WINNING_NUMBERS: "당첨 번호를 입력해 주세요. \n",
    GET_BONUS_NUMBER: "보너스 번호를 입력해 주세요. \n",
    RESULT_HEADER: "당첨 통계\n---", 
}

export const ERROR_MESSGAES = {
    LOTTO_NOT_BOUGHT: `${CONSTANTS.ERROR_PREFIX} 로또를 구매해 주세요.`,
    INVALID_BUDGET: `${CONSTANTS.ERROR_PREFIX} 구입 금액으로 숫자 이외의 입력값을 넣을 수 없습니다.`,
    INVALID_BUDGET_NUMBER: `${CONSTANTS.ERROR_PREFIX} 구입 금액은 ${CONSTANTS.LOTTO_PRICE}원 단위여야 합니다.`, 
}