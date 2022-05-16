function Button({ onClick, children }) {
  const handleClearClick = () => onClick(children);
  // const secondClick = () => console.log(name)
  return <button onClick={handleClearClick}>{children}</button>;
}

export default Button;
