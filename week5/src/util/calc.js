/**
 * 계산객체: num1, 기호, num2, result
 *
 */
export class Calc {
  constructor(num1= 0, symbol= 0, num2= 0, result= 0) {
    this.display = 0;
    this.num1 = num1;
    this.symbol = symbol;
    this.num2 = num2;
    this.result = result;
  }

  SYMBOLS = {
    ADD: "+",
    MINUS: "-",
    DIVISION: "/",
    MULTIPLE: "*",
  };

  add = () => {
    return Number(this.num1) + Number(this.num2);
  };
  minus = () => {
    return this.num1 - this.num2;
  };
  division = () => {
    if (this.num2 == 0) {
      toastOn({msg: '잘못된 계산입니다.'});
      return;
    }
    return this.num1 / this.num2;
  };
  multiple = () => {
    return this.num1 * this.num2;
  };

  calcResult = () => {
    switch (this.symbol) {
      case this.SYMBOLS.ADD:
        return this.add();
      case this.SYMBOLS.MINUS:
        return this.minus();
      case this.SYMBOLS.DIVISION:
        return this.division();
      case this.SYMBOLS.MULTIPLE:
        return this.multiple();
      default:
        break;
    }
  };
}

export const addCommasToNumber = (number) => {
  // 숫자를 문자열로 변환하여 천 단위마다 쉼표를 추가
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};