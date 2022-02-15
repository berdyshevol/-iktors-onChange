import "./App.css";
import Counter from "./Counter";
import Input from "./Input";
import Password from "./Password";
import { useState } from "react";

function App() {
  const [passwd, setPasswd] = useState("");
  const onPassword = (event) => {
    setPasswd(event.target.value);
  };

  return (
    <div className="App">
      <Counter />
      <Input passwrd={passwd} />
      <Password onPassword={onPassword} />
    </div>
  );
}

export default App;
