import { useState } from "react";

const Password = () => {
  const [passwd, setPasswd] = useState("");

  const onPassword = (event) => {
    setPasswd(event.target.value);
  };

  console.log(passwd);
  return (
    <div className="Passwd">
      <input type="password" onChange={onPassword} />
    </div>
  );
};
export default Password;
