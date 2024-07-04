const keys = [  
  7,  8,  9,  "/",  
  4,  5,  6,  "*",  
  1,  2,  3,  "-",  
  0,  ".",  "+",  
  "RESET",  "=",
];

/**
 * 계산객체: num1, 기호, num2, result
 *
 */

class Calculator {
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
    console.log('add');
    return Number(this.num1) + Number(this.num2);
  };
  minus = () => {
    console.log('min');
    return this.num1 - this.num2;
  };
  division = () => {
    console.log('div');
    if (this.num2 == 0) {
      toastOn({msg: '잘못된 계산입니다.'});
      return;
    }
    return this.num1 / this.num2;
  };
  multiple = () => {
    console.log('mul');
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

const app = () => {
  init();
};

const init = () => {
  const container = document.querySelector(".calc");
  render(container);
  doClear();

  addListener();
};

const render = (container) => {
  const html = [];
  html.push(`
      <input type='hidden' id='num1'/>
      <input type='hidden' id='symbol'/>
      <input type='hidden' id='num2'/>
      <div class="historyBtn"></div>
      <div class="display">0</div>
      <div class="numpad">`);

  keys.forEach((key, index) => {
    let classList = typeof key === "number" ? "number" : "symbol";
    
    if (key === 0) classList += ' doubleSize';
    else if(key === '.') classList += ' dot';
    if (index == keys.length - 2) classList += " doubleSize resetKey";
    if (index == keys.length - 1) classList += " doubleSize equalKey";
    html.push(
      `<button type='button' class="calcBtn ${classList}">${key}</button>`
    );
  });
  html.push(`</div>`);
  
  container.innerHTML = html.join("");
};

const addListener = () => {
  document.querySelector('.historyBtn').addEventListener('click', openModal);

  document.querySelectorAll('.number').forEach((dom) => {
    dom.addEventListener('click', clickNumber);
  });
  document.querySelectorAll('.symbol').forEach((dom) => {
    dom.addEventListener('click', clickSymbol);
  });

  document.querySelector('.equalKey').removeEventListener('click', clickSymbol);
  document.querySelector('.equalKey').addEventListener('click', doCalc);

  document.querySelector('.resetKey').removeEventListener('click', clickSymbol);
  document.querySelector('.resetKey').addEventListener('click', doClear);
}

const openModal = (event) => {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.toggle('disappear');
  modalContainer.classList.toggle('appear');
}

const clickNumber = (event) => {
  const curKey = event.target?.innerText;
  const {curSymbol, curNum1, curNum2} = getCurrentDOMs();
  if(!!!curSymbol.value == '') {curNum2.value += curKey; setDisplay(curNum2.value);}
  else {curNum1.value += curKey; setDisplay(curNum1.value);}
}

const clickSymbol = async (event) => {
  const curKey = event.target?.innerText;
  const {curSymbol, curNum1, curNum2} = getCurrentDOMs();

  if(curKey === '.') {
    if(!!!curSymbol.value == '') {curNum2.value += curKey; setDisplay(curNum2.value);}
    else {curNum1.value += curKey; setDisplay(curNum1.value);}
    return;
  }

  curSymbol.value = curKey;
  if(!!!curNum2.value == '') {
    console.log(curNum2.value);
    // await doCalc();
  } 
  curNum2.value = null;
}

const doCalc = () => {
  const {curSymbol, curNum1, curNum2} = getCurrentDOMs();

  const calc = new Calculator(curNum1.value, curSymbol.value, curNum2.value);
  if(calc.symbol == '' || curNum1.value == '' || curNum2.value == '' ) { return; }
  if(calc.symbol == '/' && calc.num2 == 0) { toastOn({msg: '잘못된 계산입니다.'}); curNum2.value = null; return;}
  

  const result = calc.calcResult();

  addHistory(result);

  curNum1.value = result;

  setDisplay(result);

  return result;
}

const getCurrentDOMs = () => {
  return {
    curNum1: document.querySelector('#num1'),
    curNum2: document.querySelector('#num2'),
    curSymbol: document.querySelector('#symbol'),
  }
}

const doClear = () => {
  // const {curSymbol, curNum1, curNum2} = getCurrentDOMs();
  setDisplay(0);
  document.querySelector('#num1').value = null;
  document.querySelector('#symbol').value = null;
  document.querySelector('#num2').value = null;
}

const setDisplay = (curNum) => {
  document.querySelector('.display').innerText = addCommasToNumber(curNum);
}

const addCommasToNumber = (number) => {
  // 숫자를 문자열로 변환하여 천 단위마다 쉼표를 추가
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const addHistory = (result) => {
  const {curSymbol, curNum1, curNum2} = getCurrentDOMs();

  const formula = `${curNum1.value} ${curSymbol.value} ${curNum2.value}`;

  const html = document.querySelector('.modal-container');
  const count = document.querySelectorAll('.modal-history')?.length + 1;

  html.innerHTML += `
    <div class='modal-history'>
      <div class='modal-formula'>
        <span class='count'>${count})</span> <span class='formula'>${formula}</span>
      </div>
      <div class='modal-result'>
        = ${result}
      </div>
    </div>
  `

  html.scrollTo({top: html.scrollHeight});
}

const toastOn = ({sec = 1000, msg = '토스트 메세지입니다.'}) => {
  const toastMsg = document.getElementById("toast_message");
  toastMsg.textContent = msg;
  toastMsg.classList.add('active');
  setTimeout(() => {
    toastMsg.classList.remove('active');
  }, sec);
}

document.addEventListener("DOMContentLoaded", app);
