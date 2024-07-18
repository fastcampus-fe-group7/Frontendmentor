import { useEffect, useState } from "react";
import { Display, History } from "../components";
import Keypad from "./Keypad";
import { keypadTypes } from "../constants/keypads";
import { addCommasToNumber, Calc } from "../util/calc";
import Modal from "../components/Modal";
import styled from "styled-components";

const CalcDiv = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--main-background);
  box-shadow: 10px 10px 1000px var(--primary-900);
`;

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [symbol, setSymbol] = useState("");
  const [modal, setModal] = useState(false);
  const [history, setHistory] = useState([]);

  const initState = () => {
    setDisplay(0);
    setNum1(0);
    setNum2(0);
    setSymbol("");
    setModal(false);
    setHistory([]);
  };

  useEffect(() => {
    initState();
  }, []);

  const historyBtnClick = (e) => {
    setModal(!modal);
  };

  const handleKeypad = (e) => {
    const { type, value } = e.target?.dataset;

    switch (type) {
      case keypadTypes.number:
        clickNumber(value);
        break;
      case keypadTypes.symbol:
        clickSymbol(value);
        break;
      case keypadTypes.resetKey:
        doClear();
        break;
      case keypadTypes.equalKey:
        doCalc();
        break;
      default:
        break;
    }
  };

  const clickNumber = (curKey) => {
    if (!!!symbol == "") {
      let curVal = !!!num2 ? curKey : num2 + curKey;
      setNum2(curVal);
      setDisplay(addCommasToNumber(curVal));
    } else {
      let curVal = !!!num1 ? curKey : num1 + curKey;
      setNum1(curVal);
      setDisplay(addCommasToNumber(curVal));
    }
  };

  const clickSymbol = async (curKey) => {
    // @Alert 이미 .이 입력된 상태에서 또 입력하는걸 씹어야함.
    if (curKey === ".") {
      if (!!!symbol == "") {
        let curVal = !!!num2 ? curKey : num2 + curKey;
        setNum2(curVal);
        setDisplay(addCommasToNumber(curVal));
      } else {
        let curVal = !!!num1 ? curKey : num1 + curKey;
        setNum1(curVal);
        setDisplay(addCommasToNumber(curVal));
      }
      return;
    }

    setSymbol(curKey);
    if (!!!num2 == "") {
      // 순서에 버그가 있어서 임시 주석
      // await doCalc();
    }
    setNum2(0);
  };

  const doCalc = () => {
    const calc = new Calc(num1, symbol, num2);
    if (calc.symbol == "" || num1 == "" || num2 == "") {
      return;
    }
    if (calc.symbol == "/" && num2 == 0) {
      // toastOn({ msg: "잘못된 계산입니다." });
      setNum2(null);
      return;
    }

    const result = calc.calcResult();

    addHistory(result);
    setNum1(result);
    // curNum1.value = result;

    setDisplay(addCommasToNumber(result));

    return result;
  };

  const doClear = () => {
    initState();
  };

  const addHistory = (result) => {
    const formula = `${num1} ${symbol} ${num2}`;
    setHistory((history) => [...history, {formula: formula, result: result}]);
  }

  return (
    <>
    <CalcDiv >
      <History handleButton={historyBtnClick} />
      <Display value={display} />
      <Keypad handleButton={handleKeypad} />
      {modal && <Modal history={history}/>}  
    </CalcDiv>
    </>
  );
};

export default Calculator;
