import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const increaseByOne = () => {
    setCounter((counter) => counter + 1);
  };

  const decreaseByOne = () => {
    setCounter((counter) => counter - 1);
  };

  const onInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button onClick={increaseByOne}>a very fine button</button>
        <button onClick={decreaseByOne}>completely normal button</button>
      </div>
      <div className="word">{input}</div>
      <div className="input">
        <input onChange={onInput} />
      </div>
    </div>
  );
}

export default App;
