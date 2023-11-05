import { Console } from "@woowacourse/mission-utils";

class LottoSystem {
  #purchaseAmount;

  constructor() {
    this.#purchaseAmount = null;
  }

  start = () => {
    this.#getPurchaseAmount();
  };

  #getPurchaseAmount = async () => {
    while (!this.#purchaseAmount) {
      try {
        const input = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        const numberInput = Number(input);
        if (isNaN(numberInput) || numberInput <= 0 || numberInput % 1000) {
          throw new Error("[ERROR] 잘못된 입력입니다.");
        }
        this.#purchaseAmount = numberInput;
      } catch (err) {
        Console.print(err.message);
      }
    }
  };
}

export default LottoSystem;
