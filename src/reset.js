import reset_img from "./assets/rock-scissor-paper/ic-reset.svg";

function Reset({ onClick }) {
  const handleClearClick = () => onClick(onClick);
  // const secondClick = () => console.log(name)
  return (
    <img
      onClick={handleClearClick}
      className="App-reset"
      src={reset_img}
      alt="초기화"
    />
  );
}

export default Reset;
