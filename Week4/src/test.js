// import { add, sub, div, mul } from "./operate";

// const expressionStack = [];
// const operatorArr = [];
let calcResultValue = 0;
const calcResultContainer = document.querySelector('#result');

const calcUserInput = (target) => {
  const targetValue = target.textContent;

  //   if (operatorArr.length > 0) alert("괄호를 닫아주세요!");
  //   if (targetValue === "(") return;

  //   if (operatorArr.length > 0 && targetValue === ")") {
  //     expressionStack.push(operatorArr.pop());
  //     return;
  //   }

  //   if (target.classList.contains("operator")) operatorArr.push(targetValue);
  //   else if (target.classList.contains("num")) expressionStack.push(targetValue);
  //   else return;

  //   console.log(`ope: ${operatorArr}, num: ${numArr}`)
  //   console.log(operatorArr);
  //   console.log(expressionStack);
  //   displayCalcResult(calculationExpression, clickTargetValue);
};

const displayCalcResult = (calculationExpression, clickTargetValue) => {
  if (clickTargetValue === '=') {
    calculationResult.textContent = `${calculationExpression}`;
  }

  console.log(`${calculationExpression}`);
  calculationResult.textContent = calculationExpression;
};

const resetCalc = () => {
  calcResult.textContent = 0;
  calcExpArr.splice(0); // 배열 요소 초기화
};

const initCalc = () => {};
document.body.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('item')) {
    if (target.classList.contains('reset')) {
      resetCalc();
      return;
    }
    calcUserInput(target);
  }
});

document.addEventListener('DOMContentLoaded', initCalc);
