import { Button } from "../components";
import keypads from "../constants/keypads";

const Keypad = ({handleButton}) => {

  return (
    <div className="numpad">
      {keypads.keys &&
        keypads.keys?.map((item, index) => {
          return (
            <Button
              key={item.key}
              props={item}
              handleButton={handleButton}
            />
          );
        })}
    </div>
  );
};

export default Keypad;
