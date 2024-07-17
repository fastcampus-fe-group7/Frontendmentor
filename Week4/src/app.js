const result = document.getElementById('result');
const items = document.querySelectorAll('.item');
const toggleSwitch = document.getElementById('toggle-switch__input');

// 계산기 상태
let currentInput = '';
let previousInput = null;
let currentOperation = null;

// DOM 요소 이벤트 등록
const addEvent = () => {
  // 테마 전환 토글 기능
  toggleSwitch.addEventListener('change', (event) => {
    document.body.classList.toggle('second-theme');
    document.querySelector('.container').classList.toggle('second-theme');
    document.querySelector('#result').classList.toggle('second-theme');
  });

  // 클릭 이벤트 처리
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const value = item.textContent;

      if (item.classList.contains('num')) {
        // 숫자일 경우
        appendNumValue(value);
      } else if (item.classList.contains('operator')) {
        // 연산자일 경우
        setOperation(value);
      } else if (item.classList.contains('result')) {
        // 결과(=)일 경우
        calculate();
      } else if (item.classList.contains('reset')) {
        //초기화(AC)일 경우
        clear();
      } else return;

      updateDisplay();
    });
  });
};

// 현재 입력값(currentInput)에 숫자값 추가
const appendNumValue = (number) => {
  currentInput += number;
};

// 연산자 설정
const setOperation = (operator) => {
  // 현재 입력값 또는 이전 입력값이 없을 경우 return
  if (currentInput === '' && previousInput === null) return;
  // 현재 입력값만 없을 경우 연산자 할당 후 return
  if (currentInput === '') {
    currentOperation = operator;
    return;
  }
  if (previousInput !== null) {
    calculate();
  }
  currentOperation = operator;
  previousInput = currentInput;
  currentInput = '';
};

// 계산 수행
const calculate = () => {
  if (
    previousInput === null ||
    currentInput === '' ||
    currentOperation === null
  )
    return;
  try {
    let computation = 0;

    const prev = parseInt(previousInput);
    const current = parseInt(currentInput);
    switch (currentOperation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }

    if (/\./.test(computation))
      currentInput = computation.toFixed(4).toString();
    // 결과값이 소수면, 4자리까지 표시F
    else currentInput = computation.toString();

    currentOperation = null;
    previousInput = null;
  } catch (e) {
    currentInput = 'Calculator Error!!';
  }
};

// 모든 입력 상태 초기화
const clear = () => {
  currentInput = '';
  currentOperation = null;
  previousInput = null;
};

// 계산기 화면 업데이트
const updateDisplay = () => {
  let displayValue = '';

  if (previousInput !== null) {
    displayValue += previousInput;
  }

  if (currentOperation !== null) {
    displayValue += ' ' + currentOperation + ' ';
  }

  if (currentInput !== '') {
    displayValue += currentInput;
  }

  result.textContent = displayValue || '0';
};

// 계산기 초기화
const initCalc = () => {
  addEvent(); // DOM 객체 생성 후, 이벤트 등록
  updateDisplay(); // 초기 화면 설정
};

document.addEventListener('DOMContentLoaded', initCalc);
