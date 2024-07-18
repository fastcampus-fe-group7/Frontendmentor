import styled from "styled-components";
import { Button } from "../components";
import keypads from "../constants/keypads";


const Numpad = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  background-color: var(--keypad-background);
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
`;

const Keypad = ({handleButton}) => {

  return (
    <Numpad>
      {keypads.keys &&
        keypads.keys?.map(item => {
          return (
            <Button
              key={item.key}
              props={item}
              handleButton={handleButton}
            />
          );
        })}
    </Numpad>
  );
};

export default Keypad;
