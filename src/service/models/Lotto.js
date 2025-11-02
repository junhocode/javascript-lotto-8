class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const set = new Set(numbers)
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== set.size)
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.")
  }

  getNumbers() {
    return this.#numbers;
  }

  #countMatchingNumber(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length
  }

  #hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber)
  }

  getRank(winningNumbers, bonusNumber) {
    const matchCount = this.#countMatchingNumber(winningNumbers)
    const hasBonus = this.#hasBonusNumber(bonusNumber)

    if (matchCount === 6) return 'FIRST';
    if (matchCount === 5 && hasBonus) return 'SECOND';
    if (matchCount === 5) return 'THIRD';
    if (matchCount === 4) return 'FOURTH';
    if (matchCount === 3) return 'FIFTH';

    return;
  }
}

export default Lotto;
