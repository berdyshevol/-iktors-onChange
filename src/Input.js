import { useState } from "react";

const Input = ({ passwrd }) => {
  const [input, setInput] = useState("");

  const onInput = (event1) => {
    setInput(event1.target.value);
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
        {input === passwrd ? "correct" : null}
      </div>
    </>
  );
};

export default Input;
