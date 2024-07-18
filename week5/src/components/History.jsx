import styled from "styled-components";

const HistoryBtn = styled.div`
  margin: 5% 20px 0 auto;

  background-image: url('../assets/history.svg');
  width:24px;
  height:24px;
  cursor: pointer;
`

const History = ({handleButton}) => {
  return <HistoryBtn onClick={handleButton} />;
};

export default History;
