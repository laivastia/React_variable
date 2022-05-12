import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const me = "rock";
const other = "scissors";
const WINS = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function getResult(left, right) {
  if (WINS[left] === right) return "승리";
  else if (left === WINS[right]) return "패배";
  else {
    return "무승부";
  }
}
function handleClick(e) {
  console.log("가위바위보!");
}

root.render(
  <>
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick} className="hand">
      가위
    </button>
    <button onClick={handleClick} className="hand">
      바위
    </button>
    <button onClick={handleClick} className="hand">
      보
    </button>
  </>
);
