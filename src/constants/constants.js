export const CONSTANTS = {
    ERROR_PREFIX: "[ERROR]",
    LOTTO_PRICE: 1000,
    MAX_LOTTO_NUMBER: 45,
    MIN_LOTTO_NUMBER: 1,
}

export const WINNING_CRITERIA = {
  FIRST:  { match: 6, hasBonusNumber: false, prize: 2000000000, rank: 1 },
  SECOND: { match: 5, hasBonusNumber: true,  prize: 30000000, rank: 2 },
  THIRD:  { match: 5, hasBonusNumber: false, prize: 1500000, rank: 3 },
  FOURTH: { match: 4, hasBonusNumber: false, prize: 50000, rank: 4 },
  FIFTH:  { match: 3, hasBonusNumber: false, prize: 5000, rank: 5 },
}