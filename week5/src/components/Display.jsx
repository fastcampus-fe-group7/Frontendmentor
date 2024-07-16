import styled from "styled-components";

const DisplayDiv = styled.div`
  display: flex;
  line-height: 4rem;
  margin: 20px;
  margin-bottom: 0px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  padding-right: 20px;
  font-size: 32px;
  color: white;
  background-color: var(--screen-background);
`;

const Display = ({value}) => {
  return (
    <DisplayDiv>
      {value}
    </DisplayDiv>
  );
};

export default Display;
