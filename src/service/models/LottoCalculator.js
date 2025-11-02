import { CONSTANTS } from "../../constants/constants.js"

const calculatePuschaseAmount = (budget) => {
    return budget / CONSTANTS.LOTTO_PRICE;
}

export default calculatePuschaseAmount;