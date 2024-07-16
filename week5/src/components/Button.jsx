import styled from "styled-components";

const CalcBtn = `
  width: 3rem;
  line-height: 3rem;
  border-radius: 5px;
  font-size: 2rem;
`;

// 뭔가 최악의 형태가 된듯?
const Key = styled.button`
  ${CalcBtn};
  color: ${({styles: props}) => props.color.font};
  background-color: ${({styles: props}) => `var(${props.color.background})`};
  box-shadow: ${({styles: props}) => `${props.color.boxShadow} var(${props.color.boxShadowColor})`};
  font-size: ${({styles: props}) => `${props.size.font}`};
  width: ${({styles: props}) => props.size.width};

  &:active {
    background-color: ${({styles: props}) => `var(${props.color.boxShadowColor})`};
  }
`;

const Button = ( {props, handleButton} ) => {
  const { key, size, type, fontSize, color } = props;
  return (
    <Key styles={props} value={key} type={type} onClick={handleButton}>
      {key}
    </Key>
  );
};

export default Button;
