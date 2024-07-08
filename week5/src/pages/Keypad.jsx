import { Button } from "../components";

const Keypad = ({ className }) => {
  return (
    <>
      <div className={className}>
        <Button className="number" text="1" />
        <Button className="number" text="2" />
        <Button className="number" text="3" />
        <Button className="symbol" text="/" />

        <Button className="number" text="4" />
        <Button className="number" text="5" />
        <Button className="number" text="6" />
        <Button className="symbol" text="*" />

        <Button className="number" text="7" />
        <Button className="number" text="8" />
        <Button className="number" text="9" />
        <Button className="symbol" text="-" />

        <Button className="number doubleSize" text="0" />
        <Button className="symbol dot" text="." />
        <Button className="symbol" text="+" />

        <Button className="symbol doubleSize resetKey" text="RESET" />
        <Button className="symbol doubleSize equalKey" text="=" />
      </div>
    </>
  );
};

export default Keypad;
