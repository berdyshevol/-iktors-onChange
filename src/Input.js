import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const intoStars = (input) => {
    let password = "";
    for (let i = 0; i < input.length; i++) {
      password += "*";
    }
    return password;
  };

  return (
    <>
      <div className="word">{intoStars(input)}</div>
      <div className="input">
        <input onChange={onInput} />
        {input === "viktor" ? "correct" : null}
      </div>
    </>
  );
};

export default Input;
