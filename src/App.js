import Home from "./pages/Home";
import styled from "styled-components";
import './App.css'

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <Container className="App">
      <Home />
    </Container>
  );
}

export default App;
