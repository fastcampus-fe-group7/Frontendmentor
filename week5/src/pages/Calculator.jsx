import { Display, History } from "../components";
import Keypad from "./Keypad";

const Calculator = ({ className }) => {
  return (
    <div className={className}>
      <History className="historyBtn" />
      <Display className="display" />
      <Keypad className="numpad" />
    </div>
  );
};

export default Calculator;
