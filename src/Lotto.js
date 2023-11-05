class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }

    numbers.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 로또 번호의 각 숫자는 정수여야 합니다.");
      }
      if (num < 1 || num > 45) {
        throw new Error(
          "[ERROR] 로또 번호의 각 숫자는 1~45 사이의 숫자여야 합니다."
        );
      }
    });
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

export default Lotto;
