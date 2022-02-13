import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter((counter) => counter + 1);
  };

  const decreaseByOne = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <>
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button onClick={increaseByOne}>a very fine button</button>
        <button onClick={decreaseByOne}>completely normal button</button>
      </div>
    </>
  );
};

export default Counter;
