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
      <div className="word">
        {intoStars(input)}
        {input === "viktor" ? "correct" : null}
      </div>
      <div className="input">
        <input onChange={onInput} />
      </div>
    </>
  );
};

export default Input;
