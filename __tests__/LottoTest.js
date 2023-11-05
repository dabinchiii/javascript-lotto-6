import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, -3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  // TODO: 문자열, 객체 등 다른 타입을 포함한 테스트 케이스 추가하기
  test("로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위(1~45)에 벗어난 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 66]);
    }).toThrow("[ERROR]");
  });
});
