import ReactDOM from "react-dom/client";
import RSP from "./rock-scissor-paper";
import DiceGame from "./dicegame";
import "../style/dice.css";

function Board() {
  const changePage = (e) => {
    let page = e.target.value;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    if (page === "DiceGame") return root.render(<DiceGame />);
    if (page === "RSP") return root.render(<RSP />);
  };
  return (
    <div className="App">
      <h1 className="AppTitle">미니게임선택</h1>
      <div className="App-boards">
        <div className="Board App-board">
          <button value={"DiceGame"} onClick={changePage}>
            주사위 게임
          </button>
          <button value={"RSP"} onClick={changePage}>
            가위바위보
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
