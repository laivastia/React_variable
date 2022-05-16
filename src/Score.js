function AppScores({ score, otherScore }) {
  return (
    <div class="App-scores">
      <Score value={score}>{"나"}</Score>
      <div className="App-versus">:</div>
      <Score value={otherScore}>{"상대"}</Score>
    </div>
  );
}

function Score({ children, value }) {
  return (
    <div className="Score">
      <div className="Score-num">{value}</div>
      <div className="Score-name">{children}</div>
    </div>
  );
}

export default AppScores;
