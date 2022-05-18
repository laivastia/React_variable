import { useState } from "react";
import Reset from "../components/rock-scissor-paper/reset.js";
import HandButton from "../components/rock-scissor-paper/HandButton";
import { compareHand, generateRandomHand } from "../utils/utils";
import AppScores from "../components/rock-scissor-paper/Score.js";
import "../style/rcp.css";
import { AppBox } from "../components/rock-scissor-paper/AppBox.js";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function RSP() {
  const [Hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextGameHistory = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextGameHistory]);
    if (comparison > 0) return setScore(score + bet);
    if (comparison < 0) return setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setBet(1);
    setScore(0);
    setOtherScore(0);
  };
  const handleBetChange = (tar) => {
    let num = Number(tar.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Reset onClick={handleClearClick} />
      <AppScores score={score} otherScore={otherScore} />
      <AppBox
        Hand={Hand}
        otherHand={otherHand}
        onChange={handleBetChange}
        bet={bet}
        gameHistory={gameHistory}
      />
      <div>
        <HandButton value="rock" onClick={handleClick} />
        <HandButton value="scissor" onClick={handleClick} />
        <HandButton value="paper" onClick={handleClick} />
      </div>
    </div>
  );
}

export default RSP;
