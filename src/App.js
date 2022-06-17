import './index.css';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';
import Button from './components/Button';

const btnValues = [
  ["C", "+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"+"],
  [0, ".", "="]
]

function App() {
  return (
  <div>
    <Wrapper>
      <Screen/>
      <ButtonContainer>
        {
          btnValues.flat().map((btn,i) =>(
            <Button value={btn} key={i}/>
          ))
        }
      </ButtonContainer>

    </Wrapper>
    </div>
  );
}

export default App;
