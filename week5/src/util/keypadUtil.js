export const clickNumber = (event) => {
  const curKey = event.target?.innerText;
  const { curSymbol, curNum1, curNum2 } = getCurrentDOMs();
  if (!!!curSymbol.value == "") {
    curNum2.value += curKey;
    setDisplay(curNum2.value);
  } else {
    curNum1.value += curKey;
    setDisplay(curNum1.value);
  }
};

export const clickSymbol = async (event) => {
  const curKey = event.target?.innerText;
  const { curSymbol, curNum1, curNum2 } = getCurrentDOMs();

  if (curKey === ".") {
    if (!!!curSymbol.value == "") {
      curNum2.value += curKey;
      setDisplay(curNum2.value);
    } else {
      curNum1.value += curKey;
      setDisplay(curNum1.value);
    }
    return;
  }

  curSymbol.value = curKey;
  if (!!!curNum2.value == "") {
    // 순서에 버그가 있어서 임시 주석
    // await doCalc();
  }
  curNum2.value = null;
};
