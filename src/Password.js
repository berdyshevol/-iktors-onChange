const Password = ({ onPassword }) => {
  return (
    <div className="Passwd">
      <input type="password" onChange={onPassword} />
    </div>
  );
};
export default Password;
