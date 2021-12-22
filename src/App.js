import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

function App() {
  const success= false, guessedWord=[],secretWord='party';
  return (
    <div data-test="app-render">
      <h3>
        Jotto
      </h3>
      <Congrats success={false}></Congrats>
      <Input success={success} secretWord={secretWord}></Input>
      <br/>
      {/* <GuessedWords guessedWords={[{
        guessedWords:'train', letterMatchCount:3
    }]}></GuessedWords> */}
       <GuessedWords guessedWords={guessedWord}></GuessedWords>

    </div>
  );
}

export default App;
