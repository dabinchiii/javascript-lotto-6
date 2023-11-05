import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class LottoSystem {
  #purchaseAmount;
  #countLotto;
  #issuedLottos;
  #winningNumbers;

  constructor() {
    this.#purchaseAmount = null;
    this.#countLotto = 0;
    this.#issuedLottos = null;
    this.#winningNumbers = null;
  }

  start = async () => {
    await this.#getPurchaseAmount();
    this.#getCountLotto(this.#purchaseAmount);
    this.#issueLottos(this.#countLotto);
    this.#printIssuedLottos();

    await this.#getWinningNumbers();
  };

  #getPurchaseAmount = async () => {
    while (!this.#purchaseAmount) {
      try {
        const input = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        const numberInput = Number(input);
        if (isNaN(numberInput) || numberInput <= 0 || numberInput % 1000) {
          throw new Error(
            "[ERROR] 구입 금액은 1,000 단위의 양의 정수여야 합니다."
          );
        }
        this.#purchaseAmount = numberInput;
      } catch (err) {
        Console.print(err.message);
      }
    }
  };

  #getCountLotto = (moneyAmount) => {
    this.#countLotto = moneyAmount / 1000;
  };

  #issueLottos = (count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(this.#issueSingleLotto());
    }
    this.#issuedLottos = result;
  };

  #issueSingleLotto = () => {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(randomNumbers);
  };

  #printIssuedLottos = () => {
    Console.print("");
    Console.print(`${this.#countLotto}개를 구매했습니다.`);
    this.#issuedLottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
    Console.print("");
  };

  #getWinningNumbers = async () => {
    let lotto = null;
    while (!this.#winningNumbers) {
      try {
        const input = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        const numbers = input.split(",").map(Number);
        lotto = new Lotto(numbers);
      } catch (err) {
        Console.print(err.message);
      }
      this.#winningNumbers = lotto;
    }
  };
}

export default LottoSystem;
