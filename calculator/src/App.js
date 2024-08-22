import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import ButtonBox from "./components/ButtonsBox/ButtonBox";
import Screen from "./components/Screen/Screen";

function App() {
  return (
    <div className="App">
      There will be calculator soon
      <Wrapper>
        <Screen></Screen>
        <ButtonBox></ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
