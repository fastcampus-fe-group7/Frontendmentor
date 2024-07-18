import styled from "styled-components";

const ModalContainer = styled.div`
  width: 320px;
  height: 300px;
  background-color: var(--primary-100);
  border-radius: 20px;
  overflow: auto;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Formula = styled.div`
padding: 10px;
border-bottom: 1px solid var(--primary-400);
`;
const Result = styled.div`
text-align: right;
`;


const Modal = ({history}) => {
  history.map(item => {
  })
  return (
    <>
      <ModalContainer className="modal">
        {history?.map(({formula, result}, index) => (
          <Formula key={index+1}><div>{index+1}) {formula}</div><Result>= {result}</Result></Formula>
        ))}
      </ModalContainer>
    </>
  );
};

export default Modal;
