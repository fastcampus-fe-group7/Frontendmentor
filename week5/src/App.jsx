import styled from "styled-components";
import Calculator from "./pages/Calculator";
// import "./styles/style.css";
import "./styles/variable.css";

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
