import { useState } from "react";
import { Display, History } from "../components";
import Keypad from "./Keypad";

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [symbol, setSymbol] = useState('');

  const initState = () => {
    setDisplay(0);
    setNum1(0);
    setNum2(0);
    setSymbol('');
  }

  const historyBtnClick = (e) => {
    // 히스토리 보여주는 모달 on
    console.log('open modal', e);
  }

  const handleKeypad = (e) => {
    // e.preventDefault();

    const a = e.target;
    console.log('keypadClick', a, a.value);
  }

  return (
    <div className="calc">
      <History handleButton={historyBtnClick}/>
      <Display value={display}/>
      <Keypad  handleButton={handleKeypad}/>
    </div>
  );
};

export default Calculator;
