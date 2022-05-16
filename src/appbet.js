export function AppBet({ bet, onChange }) {
  const handleBetChange = () => onChange(onChange);
  return (
    <div className="App-bet">
      <span>배점</span>
      <input
        type="number"
        value={bet}
        min={1}
        max={9}
        onChange={handleBetChange}
      ></input>
      <spam>배</spam>
    </div>
  );
}
